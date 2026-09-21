'use client';

import { useState } from 'react';
import { useGetReviewsQuery, useCreateReviewMutation, useDeleteReviewMutation } from '@/store/api/apiSlice';
import { Trash2, Star, Plus, MessageSquare } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

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
    <div className="space-y-8 relative z-10">
      <FadeIn delay={0.1} direction="up" className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-base-100 p-8 rounded-3xl shadow-2xl shadow-base-300/50 border border-base-200/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-warning/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-warning/10 rounded-lg text-warning">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-warning to-accent">Manage Reviews</h1>
          </div>
          <p className="text-base-content/70 font-medium">View patient feedback and remove inappropriate reviews.</p>
        </div>
        <button onClick={handleOpenModal} className="btn btn-warning rounded-full px-8 shadow-lg shadow-warning/30 relative z-10 hover:-translate-y-0.5 transition-transform text-white">
          <Plus className="h-5 w-5 mr-2" />
          Add Test Review
        </button>
      </FadeIn>

      <div className="w-full">
        {isLoading ? (
          <div className="p-20 text-center text-base-content/60 flex flex-col items-center bg-base-100 rounded-3xl shadow-2xl shadow-base-300/50 border border-base-200/60">
            <span className="loading loading-spinner loading-lg mb-4 text-warning"></span>
            <span className="font-medium">Loading reviews...</span>
          </div>
        ) : reviews?.length === 0 ? (
          <div className="p-20 text-center text-base-content/60 flex flex-col items-center bg-base-100 rounded-3xl shadow-2xl shadow-base-300/50 border border-base-200/60">
            <MessageSquare className="h-16 w-16 mb-4 text-base-content/20" />
            <p className="text-xl font-bold text-base-content/70 mb-2">No patient reviews found</p>
            <p className="mb-6">Click "Add Test Review" to create one.</p>
            <button onClick={handleOpenModal} className="btn btn-outline btn-warning rounded-full">Add Review</button>
          </div>
        ) : (
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews?.map((review: any) => (
              <StaggerItem key={review.id} className="card bg-base-100 shadow-xl shadow-base-300/50 border border-base-200/60 hover:-translate-y-2 hover:shadow-warning/10 transition-all duration-500 rounded-3xl group">
                <div className="card-body p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-warning/5 rounded-bl-full blur-2xl -z-10 transition-transform group-hover:scale-150 duration-500"></div>
                  
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-extrabold text-xl text-base-content">{review.patientName}</h3>
                      <div className="flex text-warning mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'opacity-30'}`} />
                        ))}
                      </div>
                    </div>
                    <button 
                      onClick={() => handleDelete(review.id)}
                      className="btn btn-circle btn-ghost btn-sm text-error hover:bg-error/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Delete Review"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="relative">
                    <span className="text-4xl text-warning/20 absolute -top-4 -left-2 font-serif">"</span>
                    <p className="text-base-content/80 text-sm leading-relaxed line-clamp-4 relative z-10 pl-4 font-medium italic">
                      {review.comment}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>

      {isModalOpen && (
        <div className="modal modal-open bg-black/40 backdrop-blur-md z-50">
          <div className="modal-box max-w-md bg-base-100 rounded-[2rem] border border-base-200/50 shadow-2xl p-0 overflow-hidden">
            <div className="p-8 border-b border-base-200 bg-gradient-to-r from-base-100 to-base-200/50">
              <h3 className="font-extrabold text-2xl text-base-content flex items-center gap-3">
                <div className="p-2 bg-warning/10 rounded-lg text-warning">
                  <Plus className="h-5 w-5" />
                </div>
                Add Patient Review
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold text-base-content/80 uppercase tracking-wide">Patient Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g., John Doe" 
                  className="input input-bordered w-full focus:input-warning focus:outline-none transition-all duration-300 shadow-sm bg-base-100 rounded-xl" 
                  value={formData.patientName}
                  onChange={e => setFormData({...formData, patientName: e.target.value})}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold text-base-content/80 uppercase tracking-wide">Rating (1-5) *</label>
                <div className="flex items-center gap-4 bg-base-200/50 p-4 rounded-xl border border-base-200">
                  <input 
                    type="range" 
                    min="1" max="5" step="1"
                    className="range range-warning range-sm" 
                    value={formData.rating}
                    onChange={e => setFormData({...formData, rating: Number(e.target.value)})}
                  />
                  <div className="flex text-warning font-bold bg-warning/10 px-3 py-1 rounded-lg">
                    {formData.rating} ★
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold text-base-content/80 uppercase tracking-wide">Comment *</label>
                <textarea 
                  required
                  className="textarea textarea-bordered w-full h-32 focus:textarea-warning focus:outline-none transition-all duration-300 shadow-sm bg-base-100 rounded-xl resize-none" 
                  placeholder="Patient feedback..."
                  value={formData.comment}
                  onChange={e => setFormData({...formData, comment: e.target.value})}
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-6 mt-6 border-t border-base-200">
                <button type="button" className="btn btn-ghost rounded-full font-bold px-6" onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="btn btn-warning rounded-full px-8 shadow-lg shadow-warning/30 font-bold text-white" disabled={isCreating}>
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
