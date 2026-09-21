'use client';

import { useState } from 'react';
import { useGetServicesQuery, useCreateServiceMutation, useUpdateServiceMutation, useDeleteServiceMutation } from '@/store/api/apiSlice';
import { Plus, Edit2, Trash2, Activity, HeartPulse } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

export default function ServicesManager() {
  const { data: services, isLoading } = useGetServicesQuery({});
  const [createService, { isLoading: isCreating }] = useCreateServiceMutation();
  const [updateService, { isLoading: isUpdating }] = useUpdateServiceMutation();
  const [deleteService] = useDeleteServiceMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '',
    details: '',
    showContactBtn: true
  });

  const handleOpenModal = (service?: any) => {
    if (service) {
      setEditingId(service.id);
      setFormData({
        title: service.title,
        description: service.description,
        icon: service.icon || '',
        details: service.details || '',
        showContactBtn: service.showContactBtn ?? true
      });
    } else {
      setEditingId(null);
      setFormData({ title: '', description: '', icon: '', details: '', showContactBtn: true });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({ title: '', description: '', icon: '', details: '', showContactBtn: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateService({ id: editingId, ...formData }).unwrap();
      } else {
        await createService(formData).unwrap();
      }
      handleCloseModal();
    } catch (err) {
      console.error('Failed to save service', err);
      alert('Error saving service');
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await deleteService(id).unwrap();
      } catch (err) {
        console.error('Failed to delete service', err);
      }
    }
  };

  return (
    <div className="space-y-8 relative z-10">
      <FadeIn delay={0.1} direction="up" className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-base-100 p-8 rounded-3xl shadow-2xl shadow-base-300/50 border border-base-200/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <Activity className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Manage Services</h1>
          </div>
          <p className="text-base-content/70 font-medium">Add, edit, or remove hospital services.</p>
        </div>
        <button onClick={() => handleOpenModal()} className="btn btn-primary rounded-full px-8 shadow-lg shadow-primary/30 relative z-10 hover:-translate-y-0.5 transition-transform">
          <Plus className="h-5 w-5 mr-2" />
          Add Service
        </button>
      </FadeIn>

      <FadeIn delay={0.2} direction="up" className="bg-base-100 rounded-3xl shadow-2xl shadow-base-300/50 border border-base-200/60 overflow-hidden">
        {isLoading ? (
          <div className="p-20 text-center text-base-content/60 flex flex-col items-center">
            <span className="loading loading-spinner loading-lg mb-4 text-primary"></span>
            <span className="font-medium">Loading services...</span>
          </div>
        ) : services?.length === 0 ? (
          <div className="p-20 text-center text-base-content/60 flex flex-col items-center">
            <HeartPulse className="h-16 w-16 mb-4 text-base-content/20" />
            <p className="text-xl font-bold text-base-content/70 mb-2">No services found</p>
            <p className="mb-6">Click "Add Service" to create your first one.</p>
            <button onClick={() => handleOpenModal()} className="btn btn-outline btn-primary rounded-full">Get Started</button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-base-200/50 text-base-content font-bold border-b border-base-200 uppercase text-xs tracking-wider">
                <tr>
                  <th className="py-5 px-6">Title</th>
                  <th className="py-5 px-6">Description</th>
                  <th className="py-5 px-6">Icon</th>
                  <th className="py-5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-base-200/50">
                {services?.map((service: any) => (
                  <tr key={service.id} className="hover:bg-base-200/30 transition-colors group">
                    <td className="py-4 px-6 font-bold text-base-content whitespace-nowrap">{service.title}</td>
                    <td className="py-4 px-6 max-w-xs truncate text-base-content/70 font-medium" title={service.description}>{service.description}</td>
                    <td className="py-4 px-6">
                      <span className="badge badge-ghost font-medium">{service.icon || 'None'}</span>
                    </td>
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <button 
                        onClick={() => handleOpenModal(service)}
                        className="btn btn-circle btn-ghost btn-sm text-info hover:bg-info/10 mr-2"
                        title="Edit"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(service.id)}
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

      {/* Modal using standard HTML dialog for DaisyUI */}
      {isModalOpen && (
        <div className="modal modal-open bg-black/40 backdrop-blur-md z-50">
          <div className="modal-box max-w-2xl bg-base-100 rounded-[2rem] shadow-2xl border border-base-200/50 p-0 overflow-hidden">
            <div className="p-8 border-b border-base-200 bg-gradient-to-r from-base-100 to-base-200/50">
              <h3 className="font-extrabold text-2xl text-base-content flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {editingId ? <Edit2 className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </div>
                {editingId ? 'Edit Service' : 'Add New Service'}
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold text-base-content/80 uppercase tracking-wide">Service Title *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g., Cardiology" 
                  className="input input-bordered w-full focus:input-primary focus:outline-none transition-all duration-300 shadow-sm bg-base-100 rounded-xl" 
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold text-base-content/80 uppercase tracking-wide">Short Description *</label>
                <textarea 
                  required
                  className="textarea textarea-bordered w-full h-24 focus:textarea-primary focus:outline-none leading-relaxed transition-all duration-300 shadow-sm bg-base-100 rounded-xl resize-none" 
                  placeholder="Brief overview of the service..."
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>
              
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold text-base-content/80 uppercase tracking-wide flex justify-between">
                  <span>Icon Name (Optional)</span>
                  <span className="text-xs text-base-content/50 font-medium normal-case">From Lucide React</span>
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., Heart, Brain, Activity" 
                  className="input input-bordered w-full focus:input-primary focus:outline-none transition-all duration-300 shadow-sm bg-base-100 rounded-xl" 
                  value={formData.icon}
                  onChange={e => setFormData({...formData, icon: e.target.value})}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold text-base-content/80 uppercase tracking-wide">Detailed Information (Optional)</label>
                <textarea 
                  className="textarea textarea-bordered w-full h-32 focus:textarea-primary focus:outline-none leading-relaxed transition-all duration-300 shadow-sm bg-base-100 rounded-xl resize-none" 
                  placeholder="Full details, treatments, equipment..."
                  value={formData.details}
                  onChange={e => setFormData({...formData, details: e.target.value})}
                ></textarea>
              </div>

              <div className="flex items-center justify-between p-5 bg-base-200/50 rounded-2xl border border-base-200 transition-colors hover:bg-base-200/70">
                <div>
                  <label className="text-sm font-bold text-base-content block mb-1">Show Contact Us Button</label>
                  <span className="text-xs font-medium text-base-content/60">Display the contact button on this service's public page</span>
                </div>
                <input 
                  type="checkbox" 
                  className="toggle toggle-primary" 
                  checked={formData.showContactBtn}
                  onChange={e => setFormData({...formData, showContactBtn: e.target.checked})}
                />
              </div>

              <div className="flex justify-end gap-3 pt-6 mt-6 border-t border-base-200">
                <button type="button" className="btn btn-ghost rounded-full font-bold px-6" onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="btn btn-primary rounded-full px-8 shadow-lg shadow-primary/30 font-bold" disabled={isCreating || isUpdating}>
                  {isCreating || isUpdating ? <span className="loading loading-spinner loading-sm"></span> : 'Save Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
