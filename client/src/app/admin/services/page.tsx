'use client';

import { useState } from 'react';
import { useGetServicesQuery, useCreateServiceMutation, useUpdateServiceMutation, useDeleteServiceMutation } from '@/store/api/apiSlice';
import { Plus, Edit2, Trash2 } from 'lucide-react';

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
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200">
        <div>
          <h1 className="text-2xl font-bold text-base-content">Manage Services</h1>
          <p className="text-base-content/70 text-sm mt-1">Add, edit, or remove hospital services.</p>
        </div>
        <button onClick={() => handleOpenModal()} className="btn btn-primary">
          <Plus className="h-5 w-5 mr-2" />
          Add Service
        </button>
      </div>

      <div className="bg-base-100 rounded-2xl shadow-sm border border-base-200 overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center text-base-content/60 flex flex-col items-center">
            <span className="loading loading-spinner loading-lg mb-4 text-primary"></span>
            Loading services...
          </div>
        ) : services?.length === 0 ? (
          <div className="p-12 text-center text-base-content/60">
            No services found. Click "Add Service" to create one.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-base-200 text-base-content">
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Icon</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services?.map((service: any) => (
                  <tr key={service.id} className="hover">
                    <td className="font-medium text-base-content whitespace-nowrap">{service.title}</td>
                    <td className="max-w-xs truncate text-base-content/70" title={service.description}>{service.description}</td>
                    <td>{service.icon || '-'}</td>
                    <td className="text-right whitespace-nowrap">
                      <button 
                        onClick={() => handleOpenModal(service)}
                        className="btn btn-ghost btn-sm text-info hover:bg-info/10 mr-2"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(service.id)}
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

      {/* Modal using standard HTML dialog for DaisyUI */}
      {isModalOpen && (
        <div className="modal modal-open bg-black/40 backdrop-blur-sm">
          <div className="modal-box max-w-2xl bg-base-100 rounded-2xl shadow-2xl border border-base-200">
            <h3 className="font-bold text-2xl mb-6 text-base-content border-b border-base-200 pb-4">
              {editingId ? 'Edit Service' : 'Add New Service'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-base-content/90">Service Title *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g., Cardiology" 
                  className="input input-bordered w-full focus:input-primary transition-all duration-300 shadow-sm bg-base-50" 
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-base-content/90">Short Description *</label>
                <textarea 
                  required
                  className="textarea textarea-bordered w-full h-24 focus:textarea-primary leading-relaxed transition-all duration-300 shadow-sm bg-base-50" 
                  placeholder="Brief overview of the service..."
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>
              
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-base-content/90 flex justify-between">
                  <span>Icon Name (Optional)</span>
                  <span className="text-xs text-base-content/50 font-normal">From Lucide React</span>
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., Heart, Brain, Activity" 
                  className="input input-bordered w-full focus:input-primary transition-all duration-300 shadow-sm bg-base-50" 
                  value={formData.icon}
                  onChange={e => setFormData({...formData, icon: e.target.value})}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-base-content/90">Detailed Information (Optional)</label>
                <textarea 
                  className="textarea textarea-bordered w-full h-32 focus:textarea-primary leading-relaxed transition-all duration-300 shadow-sm bg-base-50" 
                  placeholder="Full details, treatments, equipment..."
                  value={formData.details}
                  onChange={e => setFormData({...formData, details: e.target.value})}
                ></textarea>
              </div>

              <div className="flex items-center justify-between p-4 bg-base-200/50 rounded-xl border border-base-200">
                <div>
                  <label className="text-sm font-semibold text-base-content/90 block">Show Contact Us Button</label>
                  <span className="text-xs text-base-content/60">Display the contact button on this service's public page</span>
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
