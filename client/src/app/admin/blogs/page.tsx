'use client';

import { useState } from 'react';
import { useGetBlogsQuery, useCreateBlogMutation, useUpdateBlogMutation, useDeleteBlogMutation } from '@/store/api/apiSlice';
import { Plus, Edit2, Trash2, FileText, Calendar } from 'lucide-react';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';

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
    type: 'Post',
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
        type: blog.type || 'Post',
        showContactBtn: blog.showContactBtn ?? true
      });
    } else {
      setEditingId(null);
      setFormData({ title: '', author: '', content: '', image: '', type: 'Post', showContactBtn: true });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({ title: '', author: '', content: '', image: '', type: 'Post', showContactBtn: true });
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
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await deleteBlog(id).unwrap();
      } catch (err) {
        console.error('Failed to delete blog', err);
      }
    }
  };

  return (
    <div className="space-y-8 relative z-10">
      <FadeIn delay={0.1} direction="up" className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-base-100 p-8 rounded-3xl shadow-2xl shadow-base-300/50 border border-base-200/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
              <FileText className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">Manage Blogs</h1>
          </div>
          <p className="text-base-content/70 font-medium">Add, edit, or remove news and articles.</p>
        </div>
        <button onClick={() => handleOpenModal()} className="btn btn-secondary rounded-full px-8 shadow-lg shadow-secondary/30 relative z-10 hover:-translate-y-0.5 transition-transform">
          <Plus className="h-5 w-5 mr-2" />
          Write Blog
        </button>
      </FadeIn>

      <FadeIn delay={0.2} direction="up" className="bg-base-100 rounded-3xl shadow-2xl shadow-base-300/50 border border-base-200/60 overflow-hidden">
        {isLoading ? (
          <div className="p-20 text-center text-base-content/60 flex flex-col items-center">
            <span className="loading loading-spinner loading-lg mb-4 text-secondary"></span>
            <span className="font-medium">Loading blogs...</span>
          </div>
        ) : blogs?.length === 0 ? (
          <div className="p-20 text-center text-base-content/60 flex flex-col items-center">
            <FileText className="h-16 w-16 mb-4 text-base-content/20" />
            <p className="text-xl font-bold text-base-content/70 mb-2">No blogs found</p>
            <p className="mb-6">Click "Write Blog" to create your first article.</p>
            <button onClick={() => handleOpenModal()} className="btn btn-outline btn-secondary rounded-full">Start Writing</button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-base-200/50 text-base-content font-bold border-b border-base-200 uppercase text-xs tracking-wider">
                <tr>
                  <th className="py-5 px-6">Image</th>
                  <th className="py-5 px-6">Title</th>
                  <th className="py-5 px-6">Type</th>
                  <th className="py-5 px-6">Author</th>
                  <th className="py-5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-base-200/50">
                {blogs?.map((blog: any) => (
                  <tr key={blog.id} className="hover:bg-base-200/30 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="avatar">
                        <div className="w-14 h-14 rounded-xl bg-base-200/50 flex items-center justify-center overflow-hidden border border-base-200 shadow-sm">
                          {blog.image ? (
                            <Image src={blog.image} alt={blog.title} width={56} height={56} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                          ) : (
                            <span className="text-[10px] font-bold text-base-content/40 uppercase tracking-wide">No img</span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-bold text-base-content max-w-xs truncate" title={blog.title}>{blog.title}</td>
                    <td className="py-4 px-6">
                      <span className={`badge ${blog.type === 'Article' ? 'badge-secondary' : 'badge-primary'} badge-md font-medium border-0 shadow-sm`}>
                        {blog.type || 'Post'}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-base-content/70 font-medium">{blog.author}</td>
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <button 
                        onClick={() => handleOpenModal(blog)}
                        className="btn btn-circle btn-ghost btn-sm text-info hover:bg-info/10 mr-2"
                        title="Edit"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(blog.id)}
                        className="btn btn-circle btn-ghost btn-sm text-error hover:bg-error/10"
                        title="Delete"
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
      </FadeIn>

      {isModalOpen && (
        <div className="modal modal-open bg-black/40 backdrop-blur-md z-50">
          <div className="modal-box max-w-4xl bg-base-100 rounded-[2rem] shadow-2xl border border-base-200/50 p-0 overflow-hidden">
            <div className="p-8 border-b border-base-200 bg-gradient-to-r from-base-100 to-base-200/50">
              <h3 className="font-extrabold text-2xl text-base-content flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  {editingId ? <Edit2 className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </div>
                {editingId ? 'Edit Blog' : 'Write New Blog'}
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              
              <div className="flex flex-col space-y-3">
                <label className="text-sm font-bold text-base-content/80 uppercase tracking-wide">Blog Type *</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-3 p-3 border border-base-200 rounded-xl cursor-pointer hover:bg-base-200/50 transition-colors">
                    <input 
                      type="radio" 
                      name="type" 
                      className="radio radio-primary" 
                      checked={formData.type === 'Post'} 
                      onChange={() => setFormData({...formData, type: 'Post'})} 
                    />
                    <span className="font-bold">Post</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-base-200 rounded-xl cursor-pointer hover:bg-base-200/50 transition-colors">
                    <input 
                      type="radio" 
                      name="type" 
                      className="radio radio-secondary" 
                      checked={formData.type === 'Article'} 
                      onChange={() => setFormData({...formData, type: 'Article'})} 
                    />
                    <span className="font-bold">Article</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-bold text-base-content/80 uppercase tracking-wide">Blog Title *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., Heart Health Tips" 
                    className="input input-bordered w-full focus:input-secondary focus:outline-none transition-all duration-300 shadow-sm bg-base-100 rounded-xl" 
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-bold text-base-content/80 uppercase tracking-wide">Author Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., Dr. Smith" 
                    className="input input-bordered w-full focus:input-secondary focus:outline-none transition-all duration-300 shadow-sm bg-base-100 rounded-xl" 
                    value={formData.author}
                    onChange={e => setFormData({...formData, author: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold text-base-content/80 uppercase tracking-wide">Cover Image URL (Optional)</label>
                <input 
                  type="text" 
                  placeholder="https://example.com/image.jpg" 
                  className="input input-bordered w-full focus:input-secondary focus:outline-none transition-all duration-300 shadow-sm bg-base-100 rounded-xl" 
                  value={formData.image}
                  onChange={e => setFormData({...formData, image: e.target.value})}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold text-base-content/80 uppercase tracking-wide">Blog Content *</label>
                <textarea 
                  required
                  className="textarea textarea-bordered w-full h-48 focus:textarea-secondary focus:outline-none leading-relaxed transition-all duration-300 shadow-sm bg-base-100 rounded-xl resize-none" 
                  placeholder="Write the full content of the blog post here..."
                  value={formData.content}
                  onChange={e => setFormData({...formData, content: e.target.value})}
                ></textarea>
              </div>

              <div className="flex items-center justify-between p-5 bg-base-200/50 rounded-2xl border border-base-200 transition-colors hover:bg-base-200/70">
                <div>
                  <label className="text-sm font-bold text-base-content block mb-1">Show Contact Us Button</label>
                  <span className="text-xs font-medium text-base-content/60">Display the contact CTA at the bottom of this blog</span>
                </div>
                <input 
                  type="checkbox" 
                  className="toggle toggle-secondary" 
                  checked={formData.showContactBtn}
                  onChange={e => setFormData({...formData, showContactBtn: e.target.checked})}
                />
              </div>

              <div className="flex justify-end gap-3 pt-6 mt-6 border-t border-base-200">
                <button type="button" className="btn btn-ghost rounded-full font-bold px-6" onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="btn btn-secondary rounded-full px-8 shadow-lg shadow-secondary/30 font-bold" disabled={isCreating || isUpdating}>
                  {isCreating || isUpdating ? <span className="loading loading-spinner loading-sm"></span> : 'Save Blog'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
