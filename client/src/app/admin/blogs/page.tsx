'use client';

import { useState } from 'react';
import { useGetBlogsQuery, useCreateBlogMutation, useUpdateBlogMutation, useDeleteBlogMutation } from '@/store/api/apiSlice';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import Image from 'next/image';

export default function BlogsManager() {
  const { data: blogs, isLoading } = useGetBlogsQuery({});
  const [createBlog, { isLoading: isCreating }] = useCreateBlogMutation();
  const [updateBlog, { isLoading: isUpdating }] = useUpdateBlogMutation();
  const [deleteBlog] = useDeleteBlogMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    image: '',
    showContactBtn: true
  });

  const handleOpenModal = (blog?: any) => {
    if (blog) {
      setEditingId(blog.id);
      setFormData({
        title: blog.title,
        author: blog.author,
        content: blog.content,
        image: blog.image || '',
        showContactBtn: blog.showContactBtn ?? true
      });
    } else {
      setEditingId(null);
      setFormData({ title: '', author: '', content: '', image: '', showContactBtn: true });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({ title: '', author: '', content: '', image: '', showContactBtn: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateBlog({ id: editingId, ...formData }).unwrap();
      } else {
        await createBlog(formData).unwrap();
      }
      handleCloseModal();
    } catch (err) {
      console.error('Failed to save blog', err);
      alert('Error saving blog');
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteBlog(id).unwrap();
      } catch (err) {
        console.error('Failed to delete blog', err);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200">
        <div>
          <h1 className="text-2xl font-bold text-base-content">Manage Blogs</h1>
          <p className="text-base-content/70 text-sm mt-1">Add, edit, or remove health articles and blogs.</p>
        </div>
        <button onClick={() => handleOpenModal()} className="btn btn-primary">
          <Plus className="h-5 w-5 mr-2" />
          Write Blog
        </button>
      </div>

      <div className="bg-base-100 rounded-2xl shadow-sm border border-base-200 overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center text-base-content/60 flex flex-col items-center">
            <span className="loading loading-spinner loading-lg mb-4 text-primary"></span>
            Loading blogs...
          </div>
        ) : blogs?.length === 0 ? (
          <div className="p-12 text-center text-base-content/60">
            No blogs found. Click "Write Blog" to create one.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-base-200 text-base-content">
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs?.map((blog: any) => (
                  <tr key={blog.id} className="hover">
                    <td>
                      <div className="avatar">
                        <div className="w-12 h-12 rounded-lg bg-base-200 flex items-center justify-center">
                          {blog.image ? (
                            <Image src={blog.image} alt={blog.title} width={48} height={48} className="object-cover w-full h-full" />
                          ) : (
                            <span className="text-xs text-base-content/40">No img</span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="font-medium text-base-content max-w-xs truncate" title={blog.title}>{blog.title}</td>
                    <td className="text-base-content/70">{blog.author}</td>
                    <td className="text-right whitespace-nowrap">
                      <button 
                        onClick={() => handleOpenModal(blog)}
                        className="btn btn-ghost btn-sm text-info hover:bg-info/10 mr-2"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(blog.id)}
                        className="btn btn-ghost btn-sm text-error hover:bg-error/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="modal modal-open bg-black/40 backdrop-blur-sm">
          <div className="modal-box max-w-3xl bg-base-100 rounded-2xl shadow-2xl border border-base-200">
            <h3 className="font-bold text-2xl mb-6 text-base-content border-b border-base-200 pb-4">
              {editingId ? 'Edit Blog' : 'Write New Blog'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-base-content/90">Blog Title *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., Heart Health Tips" 
                    className="input input-bordered w-full focus:input-primary transition-all duration-300 shadow-sm bg-base-50" 
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-base-content/90">Author Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., Dr. Smith" 
                    className="input input-bordered w-full focus:input-primary transition-all duration-300 shadow-sm bg-base-50" 
                    value={formData.author}
                    onChange={e => setFormData({...formData, author: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-base-content/90">Cover Image URL (Optional)</label>
                <input 
                  type="text" 
                  placeholder="https://example.com/image.jpg" 
                  className="input input-bordered w-full focus:input-primary transition-all duration-300 shadow-sm bg-base-50" 
                  value={formData.image}
                  onChange={e => setFormData({...formData, image: e.target.value})}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-base-content/90">Blog Content *</label>
                <textarea 
                  required
                  className="textarea textarea-bordered w-full h-48 focus:textarea-primary leading-relaxed transition-all duration-300 shadow-sm bg-base-50" 
                  placeholder="Write the full blog post here..."
                  value={formData.content}
                  onChange={e => setFormData({...formData, content: e.target.value})}
                ></textarea>
              </div>

              <div className="flex items-center justify-between p-4 bg-base-200/50 rounded-xl border border-base-200">
                <div>
                  <label className="text-sm font-semibold text-base-content/90 block">Show Contact Us Button</label>
                  <span className="text-xs text-base-content/60">Display the contact button at the end of this blog post</span>
                </div>
                <input 
                  type="checkbox" 
                  className="toggle toggle-primary" 
                  checked={formData.showContactBtn}
                  onChange={e => setFormData({...formData, showContactBtn: e.target.checked})}
                />
              </div>

              <div className="modal-action border-t border-base-200 pt-6 mt-6">
                <button type="button" className="btn btn-ghost rounded-xl" onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="btn btn-primary rounded-xl px-8 shadow-lg shadow-primary/20" disabled={isCreating || isUpdating}>
                  {isCreating || isUpdating ? <span className="loading loading-spinner loading-sm"></span> : 'Publish Blog'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
