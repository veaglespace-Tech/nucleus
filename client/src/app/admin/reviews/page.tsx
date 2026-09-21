'use client';

import { useState } from 'react';
import { useGetReviewsQuery, useCreateReviewMutation, useDeleteReviewMutation } from '@/store/api/apiSlice';
import { Trash2, Star, Plus } from 'lucide-react';

export default function ReviewsManager() {
  const { data: reviews, isLoading } = useGetReviewsQuery({});
  const [createReview, { isLoading: isCreating }] = useCreateReviewMutation();
  const [deleteReview] = useDeleteReviewMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    patientName: '',
    rating: 5,
    comment: ''
  });

  const handleOpenModal = () => setIsModalOpen(true);
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ patientName: '', rating: 5, comment: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createReview({ ...formData, rating: Number(formData.rating) }).unwrap();
      handleCloseModal();
    } catch (err) {
      console.error('Failed to create review', err);
      alert('Error saving review');
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      try {
        await deleteReview(id).unwrap();
      } catch (err) {
        console.error('Failed to delete review', err);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200">
        <div>
          <h1 className="text-2xl font-bold text-base-content">Manage Reviews</h1>
          <p className="text-base-content/70 text-sm mt-1">View patient feedback and remove inappropriate reviews.</p>
        </div>
        <button onClick={handleOpenModal} className="btn btn-primary btn-outline">
          <Plus className="h-4 w-4 mr-2" />
          Add Test Review
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="col-span-full p-12 text-center text-base-content/60 flex flex-col items-center">
            <span className="loading loading-spinner loading-lg mb-4 text-primary"></span>
            Loading reviews...
          </div>
        ) : reviews?.length === 0 ? (
          <div className="col-span-full p-12 text-center text-base-content/60 bg-base-100 rounded-2xl border border-base-200">
            No patient reviews found.
          </div>
        ) : (
          reviews?.map((review: any) => (
            <div key={review.id} className="card bg-base-100 shadow-md border border-base-200 hover:shadow-lg transition-all duration-300">
              <div className="card-body p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-base-content">{review.patientName}</h3>
                    <div className="flex text-warning mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'opacity-30'}`} />
                      ))}
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDelete(review.id)}
                    className="btn btn-ghost btn-sm text-error hover:bg-error/10"
                    title="Delete Review"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-base-content/80 text-sm leading-relaxed line-clamp-4">
                  "{review.comment}"
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <div className="modal modal-open bg-black/40 backdrop-blur-sm">
          <div className="modal-box bg-base-100 rounded-2xl border border-base-200 shadow-2xl">
            <h3 className="font-bold text-2xl mb-6 text-base-content border-b border-base-200 pb-4">
              Add Patient Review
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-base-content/90">Patient Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g., John Doe" 
                  className="input input-bordered w-full focus:input-primary transition-all duration-300 shadow-sm bg-base-50" 
                  value={formData.patientName}
                  onChange={e => setFormData({...formData, patientName: e.target.value})}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-base-content/90">Rating (1-5) *</label>
                <input 
                  type="number" 
                  min="1" max="5"
                  required
                  className="input input-bordered w-full focus:input-primary transition-all duration-300 shadow-sm bg-base-50" 
                  value={formData.rating}
                  onChange={e => setFormData({...formData, rating: Number(e.target.value)})}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-base-content/90">Comment *</label>
                <textarea 
                  required
                  className="textarea textarea-bordered w-full h-24 focus:textarea-primary transition-all duration-300 shadow-sm bg-base-50" 
                  placeholder="Patient feedback..."
                  value={formData.comment}
                  onChange={e => setFormData({...formData, comment: e.target.value})}
                ></textarea>
              </div>

              <div className="modal-action border-t border-base-200 pt-6 mt-6">
                <button type="button" className="btn btn-ghost rounded-xl" onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="btn btn-primary rounded-xl shadow-lg shadow-primary/20" disabled={isCreating}>
                  {isCreating ? <span className="loading loading-spinner loading-sm"></span> : 'Submit Review'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
