import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  getProfile, updateProfile,
  getSkills, addSkill, updateSkill, deleteSkill,
  getProjects, addProject, updateProject, deleteProject,
  getCertificates, addCertificate, updateCertificate, deleteCertificate,
  getResume, updateResume,
  getInbox, deleteMessage,
  getTheme, updateTheme,
  resetData
} from '../utils/storage';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [resume, setResume] = useState(null);
  const [inbox, setInbox] = useState([]);
  const [theme, setTheme] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadAllData();
  }, []);

  useEffect(() => {
    // Update state when profile changes
    if (profile) {
      setProfile(getProfile());
    }
  }, [activeTab]);

  const loadAllData = () => {
    setProfile(getProfile());
    setSkills(getSkills());
    setProjects(getProjects());
    setCertificates(getCertificates());
    setResume(getResume());
    setInbox(getInbox());
    setTheme(getTheme());
  };

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '💻' },
    { id: 'certificates', label: 'Certificates', icon: '📜' },
    { id: 'resume', label: 'Resume', icon: '📄' },
    { id: 'inbox', label: 'Inbox', icon: '📧' },
    { id: 'theme', label: 'Theme', icon: '🎨' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-secondary mb-2">Admin Panel</h1>
          <p className="text-gray-600">Manage your portfolio content</p>
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">💡 Tip:</span> This portfolio comes pre-loaded with sample data about "Adrian Wijaya". 
              You can edit all the information through the tabs below - just click on any section, modify the data, and click Save. 
              All changes are stored locally in your browser.
            </p>
          </div>
        </motion.div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
          >
            {message}
          </motion.div>
        )}

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-2xl">{tab.icon}</span>
                    <span className="font-medium">{tab.label}</span>
                    {tab.id === 'inbox' && inbox.length > 0 && (
                      <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        {inbox.length}
                      </span>
                    )}
                  </button>
                ))}
              </nav>

              <button
                onClick={() => {
                  if (window.confirm('Reset all data to default? This cannot be undone!')) {
                    resetData();
                    loadAllData();
                    showMessage('Data reset to default values');
                  }
                }}
                className="w-full mt-6 px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
              >
                Reset All Data
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'profile' && (
                <ProfileEditor
                  profile={profile}
                  setProfile={setProfile}
                  showMessage={showMessage}
                />
              )}
              {activeTab === 'skills' && (
                <SkillsEditor
                  skills={skills}
                  setSkills={setSkills}
                  showMessage={showMessage}
                />
              )}
              {activeTab === 'projects' && (
                <ProjectsEditor
                  projects={projects}
                  setProjects={setProjects}
                  showMessage={showMessage}
                />
              )}
              {activeTab === 'certificates' && (
                <CertificatesEditor
                  certificates={certificates}
                  setCertificates={setCertificates}
                  showMessage={showMessage}
                />
              )}
              {activeTab === 'resume' && (
                <ResumeEditor
                  resume={resume}
                  setResume={setResume}
                  showMessage={showMessage}
                />
              )}
              {activeTab === 'inbox' && (
                <InboxViewer
                  inbox={inbox}
                  setInbox={setInbox}
                  showMessage={showMessage}
                />
              )}
              {activeTab === 'theme' && (
                <ThemeEditor
                  theme={theme}
                  setTheme={setTheme}
                  showMessage={showMessage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile Editor Component
const ProfileEditor = ({ profile, setProfile, showMessage }) => {
  const [formData, setFormData] = useState(profile || {});

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setProfile(formData);
    showMessage('Profile updated successfully!');
  };

  const handleSocialChange = (index, field, value) => {
    const newSocials = [...(formData.socials || [])];
    newSocials[index] = { ...newSocials[index], [field]: value };
    setFormData({ ...formData, socials: newSocials });
  };

  const addSocial = () => {
    setFormData({
      ...formData,
      socials: [...(formData.socials || []), { name: '', url: '', icon: '' }]
    });
  };

  const removeSocial = (index) => {
    const newSocials = formData.socials.filter((_, i) => i !== index);
    setFormData({ ...formData, socials: newSocials });
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...(formData.education || [])];
    newEducation[index] = { ...newEducation[index], [field]: value };
    setFormData({ ...formData, education: newEducation });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...(formData.education || []), { id: Date.now().toString(), institution: '', degree: '', year: '', description: '' }]
    });
  };

  const removeEducation = (index) => {
    const newEducation = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: newEducation });
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...(formData.experience || [])];
    newExperience[index] = { ...newExperience[index], [field]: value };
    setFormData({ ...formData, experience: newExperience });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [...(formData.experience || []), { id: Date.now().toString(), company: '', position: '', year: '', description: '' }]
    });
  };

  const removeExperience = (index) => {
    const newExperience = formData.experience.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: newExperience });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary mb-6">Profile Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">Name</label>
            <input
              type="text"
              value={formData.name || ''}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">Title</label>
            <input
              type="text"
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">Description</label>
          <textarea
            value={formData.description || ''}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows="3"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">Profile Picture URL</label>
            <input
              type="url"
              value={formData.profilePictureURL || ''}
              onChange={(e) => setFormData({ ...formData, profilePictureURL: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">Email</label>
            <input
              type="email"
              value={formData.email || ''}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Social Links */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="block text-sm font-semibold text-secondary">Social Links</label>
            <button
              type="button"
              onClick={addSocial}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors text-sm"
            >
              + Add Social
            </button>
          </div>
          <div className="space-y-3">
            {formData.socials?.map((social, index) => (
              <div key={index} className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg">
                <input
                  type="text"
                  placeholder="Name"
                  value={social.name}
                  onChange={(e) => handleSocialChange(index, 'name', e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-lg"
                />
                <input
                  type="url"
                  placeholder="URL"
                  value={social.url}
                  onChange={(e) => handleSocialChange(index, 'url', e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Icon (emoji)"
                  value={social.icon}
                  onChange={(e) => handleSocialChange(index, 'icon', e.target.value)}
                  className="w-20 px-3 py-2 border rounded-lg text-center"
                />
                <button
                  type="button"
                  onClick={() => removeSocial(index)}
                  className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="block text-sm font-semibold text-secondary">Education</label>
            <button
              type="button"
              onClick={addEducation}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors text-sm"
            >
              + Add Education
            </button>
          </div>
          <div className="space-y-4">
            {formData.education?.map((edu, index) => (
              <div key={edu.id} className="p-4 bg-gray-50 rounded-lg space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Institution"
                    value={edu.institution}
                    onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                    className="px-3 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                    className="px-3 py-2 border rounded-lg"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Year"
                  value={edu.year}
                  onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <textarea
                  placeholder="Description"
                  value={edu.description}
                  onChange={(e) => handleEducationChange(index, 'description', e.target.value)}
                  rows="2"
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeEducation(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="block text-sm font-semibold text-secondary">Experience</label>
            <button
              type="button"
              onClick={addExperience}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors text-sm"
            >
              + Add Experience
            </button>
          </div>
          <div className="space-y-4">
            {formData.experience?.map((exp, index) => (
              <div key={exp.id} className="p-4 bg-gray-50 rounded-lg space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Company"
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                    className="px-3 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Position"
                    value={exp.position}
                    onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                    className="px-3 py-2 border rounded-lg"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Year"
                  value={exp.year}
                  onChange={(e) => handleExperienceChange(index, 'year', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <textarea
                  placeholder="Description"
                  value={exp.description}
                  onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                  rows="2"
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors font-semibold"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

// Skills Editor Component
const SkillsEditor = ({ skills, setSkills, showMessage }) => {
  const [editingSkill, setEditingSkill] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    level: 50,
    category: '',
    icon: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingSkill) {
      updateSkill(editingSkill.id, formData);
      showMessage('Skill updated successfully!');
    } else {
      addSkill(formData);
      showMessage('Skill added successfully!');
    }
    setSkills(getSkills());
    setFormData({ name: '', level: 50, category: '', icon: '' });
    setEditingSkill(null);
  };

  const handleEdit = (skill) => {
    setEditingSkill(skill);
    setFormData(skill);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this skill?')) {
      deleteSkill(id);
      setSkills(getSkills());
      showMessage('Skill deleted successfully!');
    }
  };

  const handleCancel = () => {
    setEditingSkill(null);
    setFormData({ name: '', level: 50, category: '', icon: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary mb-6">Skills Management</h2>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-50 rounded-lg space-y-4">
        <h3 className="text-lg font-semibold text-secondary">
          {editingSkill ? 'Edit Skill' : 'Add New Skill'}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Skill Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Level: {formData.level}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: parseInt(e.target.value) })}
              className="w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Icon (emoji)"
            value={formData.icon}
            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
            required
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors font-semibold"
          >
            {editingSkill ? 'Update Skill' : 'Add Skill'}
          </button>
          {editingSkill && (
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Skills List */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-secondary mb-4">All Skills ({skills.length})</h3>
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center justify-between p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4 flex-1">
              <span className="text-3xl">{skill.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-secondary">{skill.name}</h4>
                  <span className="text-sm text-gray-600">{skill.category}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">{skill.level}%</span>
              </div>
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => handleEdit(skill)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(skill.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Projects Editor Component (continuing in next part due to size)
const ProjectsEditor = ({ projects, setProjects, showMessage }) => {
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    longDescription: '',
    techStack: [],
    githubURL: '',
    liveDemoURL: '',
    thumbnailURL: '',
    galleryImages: [],
    features: [],
    challenges: '',
    solutions: ''
  });
  const [techInput, setTechInput] = useState('');
  const [featureInput, setFeatureInput] = useState('');
  const [galleryInput, setGalleryInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProject) {
      updateProject(editingProject.id, formData);
      showMessage('Project updated successfully!');
    } else {
      addProject(formData);
      showMessage('Project added successfully!');
    }
    setProjects(getProjects());
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      shortDescription: '',
      longDescription: '',
      techStack: [],
      githubURL: '',
      liveDemoURL: '',
      thumbnailURL: '',
      galleryImages: [],
      features: [],
      challenges: '',
      solutions: ''
    });
    setEditingProject(null);
    setTechInput('');
    setFeatureInput('');
    setGalleryInput('');
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData(project);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this project?')) {
      deleteProject(id);
      setProjects(getProjects());
      showMessage('Project deleted successfully!');
    }
  };

  const addTech = () => {
    if (techInput.trim()) {
      setFormData({ ...formData, techStack: [...formData.techStack, techInput.trim()] });
      setTechInput('');
    }
  };

  const removeTech = (index) => {
    setFormData({ ...formData, techStack: formData.techStack.filter((_, i) => i !== index) });
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setFormData({ ...formData, features: [...formData.features, featureInput.trim()] });
      setFeatureInput('');
    }
  };

  const removeFeature = (index) => {
    setFormData({ ...formData, features: formData.features.filter((_, i) => i !== index) });
  };

  const addGallery = () => {
    if (galleryInput.trim()) {
      setFormData({ ...formData, galleryImages: [...formData.galleryImages, galleryInput.trim()] });
      setGalleryInput('');
    }
  };

  const removeGallery = (index) => {
    setFormData({ ...formData, galleryImages: formData.galleryImages.filter((_, i) => i !== index) });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary mb-6">Projects Management</h2>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-50 rounded-lg space-y-4">
        <h3 className="text-lg font-semibold text-secondary">
          {editingProject ? 'Edit Project' : 'Add New Project'}
        </h3>
        
        <input
          type="text"
          placeholder="Project Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
        />
        
        <textarea
          placeholder="Short Description"
          value={formData.shortDescription}
          onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
          required
          rows="2"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
        />
        
        <textarea
          placeholder="Long Description"
          value={formData.longDescription}
          onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
          required
          rows="4"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="url"
            placeholder="GitHub URL"
            value={formData.githubURL}
            onChange={(e) => setFormData({ ...formData, githubURL: e.target.value })}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          />
          <input
            type="url"
            placeholder="Live Demo URL"
            value={formData.liveDemoURL}
            onChange={(e) => setFormData({ ...formData, liveDemoURL: e.target.value })}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          />
        </div>

        <input
          type="url"
          placeholder="Thumbnail URL"
          value={formData.thumbnailURL}
          onChange={(e) => setFormData({ ...formData, thumbnailURL: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
        />

        {/* Tech Stack */}
        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">Tech Stack</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Add technology"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <button
              type="button"
              onClick={addTech}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm flex items-center gap-2"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => removeTech(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">Features</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Add feature"
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <button
              type="button"
              onClick={addFeature}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
            >
              Add
            </button>
          </div>
          <ul className="space-y-1">
            {formData.features.map((feature, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-white rounded">
                <span>{feature}</span>
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery Images */}
        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">Gallery Images</label>
          <div className="flex gap-2 mb-2">
            <input
              type="url"
              placeholder="Add image URL"
              value={galleryInput}
              onChange={(e) => setGalleryInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addGallery())}
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <button
              type="button"
              onClick={addGallery}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
            >
              Add
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {formData.galleryImages.map((img, index) => (
              <div key={index} className="relative group">
                <img src={img} alt="" className="w-full h-24 object-cover rounded" />
                <button
                  type="button"
                  onClick={() => removeGallery(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <textarea
          placeholder="Challenges"
          value={formData.challenges}
          onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
          rows="3"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
        />

        <textarea
          placeholder="Solutions"
          value={formData.solutions}
          onChange={(e) => setFormData({ ...formData, solutions: e.target.value })}
          rows="3"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors font-semibold"
          >
            {editingProject ? 'Update Project' : 'Add Project'}
          </button>
          {editingProject && (
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Projects List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary mb-4">All Projects ({projects.length})</h3>
        {projects.map((project) => (
          <div key={project.id} className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              <img
                src={project.thumbnailURL}
                alt={project.title}
                className="w-32 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-bold text-secondary text-lg mb-1">{project.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-100 text-primary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Certificates Editor Component
const CertificatesEditor = ({ certificates, setCertificates, showMessage }) => {
  const [editingCert, setEditingCert] = useState(null);
  const [formData, setFormData] = useState({
    certificateTitle: '',
    issuer: '',
    year: '',
    credentialID: '',
    credentialURL: '',
    certificateImageURL: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCert) {
      updateCertificate(editingCert.id, formData);
      showMessage('Certificate updated successfully!');
    } else {
      addCertificate(formData);
      showMessage('Certificate added successfully!');
    }
    setCertificates(getCertificates());
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      certificateTitle: '',
      issuer: '',
      year: '',
      credentialID: '',
      credentialURL: '',
      certificateImageURL: ''
    });
    setEditingCert(null);
  };

  const handleEdit = (cert) => {
    setEditingCert(cert);
    setFormData(cert);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this certificate?')) {
      deleteCertificate(id);
      setCertificates(getCertificates());
      showMessage('Certificate deleted successfully!');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary mb-6">Certificates Management</h2>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-50 rounded-lg space-y-4">
        <h3 className="text-lg font-semibold text-secondary">
          {editingCert ? 'Edit Certificate' : 'Add New Certificate'}
        </h3>
        
        <input
          type="text"
          placeholder="Certificate Title"
          value={formData.certificateTitle}
          onChange={(e) => setFormData({ ...formData, certificateTitle: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
        />
        
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Issuer"
            value={formData.issuer}
            onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
            required
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            placeholder="Year"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            required
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          />
        </div>

        <input
          type="text"
          placeholder="Credential ID"
          value={formData.credentialID}
          onChange={(e) => setFormData({ ...formData, credentialID: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
        />

        <input
          type="url"
          placeholder="Credential URL"
          value={formData.credentialURL}
          onChange={(e) => setFormData({ ...formData, credentialURL: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
        />

        <input
          type="url"
          placeholder="Certificate Image URL"
          value={formData.certificateImageURL}
          onChange={(e) => setFormData({ ...formData, certificateImageURL: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors font-semibold"
          >
            {editingCert ? 'Update Certificate' : 'Add Certificate'}
          </button>
          {editingCert && (
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Certificates List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary mb-4">All Certificates ({certificates.length})</h3>
        {certificates.map((cert) => (
          <div key={cert.id} className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              <img
                src={cert.certificateImageURL}
                alt={cert.certificateTitle}
                className="w-40 h-28 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-bold text-secondary text-lg mb-1">{cert.certificateTitle}</h4>
                <p className="text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-primary text-sm font-semibold">{cert.year}</p>
                {cert.credentialID && (
                  <p className="text-xs text-gray-500 mt-2">ID: {cert.credentialID}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleEdit(cert)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(cert.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Resume Editor Component
const ResumeEditor = ({ resume, setResume, showMessage }) => {
  const [formData, setFormData] = useState(resume || { summary: '', achievements: [] });
  const [achievementInput, setAchievementInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateResume(formData);
    setResume(formData);
    showMessage('Resume updated successfully!');
  };

  const addAchievement = () => {
    if (achievementInput.trim()) {
      setFormData({
        ...formData,
        achievements: [...(formData.achievements || []), achievementInput.trim()]
      });
      setAchievementInput('');
    }
  };

  const removeAchievement = (index) => {
    setFormData({
      ...formData,
      achievements: formData.achievements.filter((_, i) => i !== index)
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary mb-6">Resume Settings</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">Professional Summary</label>
          <textarea
            value={formData.summary || ''}
            onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            placeholder="Write a brief professional summary..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">Achievements & Awards</label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              placeholder="Add achievement"
              value={achievementInput}
              onChange={(e) => setAchievementInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addAchievement())}
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <button
              type="button"
              onClick={addAchievement}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
            >
              Add
            </button>
          </div>
          <ul className="space-y-2">
            {formData.achievements?.map((achievement, index) => (
              <li key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span>{achievement}</span>
                <button
                  type="button"
                  onClick={() => removeAchievement(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Education, Experience, and Skills are managed in their respective sections (Profile and Skills tabs).
          </p>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors font-semibold"
        >
          Save Resume
        </button>
      </form>
    </div>
  );
};

// Inbox Viewer Component
const InboxViewer = ({ inbox, setInbox, showMessage }) => {
  const handleDelete = (id) => {
    if (window.confirm('Delete this message?')) {
      deleteMessage(id);
      setInbox(getInbox());
      showMessage('Message deleted!');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary mb-6">Inbox Messages ({inbox.length})</h2>
      
      {inbox.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p className="text-gray-600">No messages yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {inbox.map((msg) => (
            <div key={msg.id} className="p-6 bg-white border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-secondary text-lg">{msg.name}</h3>
                  <p className="text-primary text-sm">{msg.email}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">
                    {new Date(msg.timestamp).toLocaleDateString()}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 whitespace-pre-wrap">{msg.message}</p>
              <div className="flex gap-3">
                <a
                  href={`mailto:${msg.email}?subject=Re: Your message&body=Hi ${msg.name},%0D%0A%0D%0A`}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors text-sm"
                >
                  Reply
                </a>
                <button
                  onClick={() => handleDelete(msg.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Theme Editor Component
const ThemeEditor = ({ theme, setTheme, showMessage }) => {
  const [formData, setFormData] = useState(theme || {
    primaryColor: '#3B82F6',
    accentColor: '#60A5FA',
    fontSize: 'medium',
    layout: 'modern'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTheme(formData);
    setTheme(formData);
    showMessage('Theme updated successfully! Reload the page to see changes.');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary mb-6">Theme Settings</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">Primary Color</label>
            <div className="flex gap-3 items-center">
              <input
                type="color"
                value={formData.primaryColor}
                onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
                className="w-16 h-16 rounded cursor-pointer"
              />
              <input
                type="text"
                value={formData.primaryColor}
                onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
                className="flex-1 px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">Accent Color</label>
            <div className="flex gap-3 items-center">
              <input
                type="color"
                value={formData.accentColor}
                onChange={(e) => setFormData({ ...formData, accentColor: e.target.value })}
                className="w-16 h-16 rounded cursor-pointer"
              />
              <input
                type="text"
                value={formData.accentColor}
                onChange={(e) => setFormData({ ...formData, accentColor: e.target.value })}
                className="flex-1 px-4 py-2 border rounded-lg"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">Font Size</label>
          <select
            value={formData.fontSize}
            onChange={(e) => setFormData({ ...formData, fontSize: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">Layout Style</label>
          <select
            value={formData.layout}
            onChange={(e) => setFormData({ ...formData, layout: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          >
            <option value="modern">Modern</option>
            <option value="classic">Classic</option>
            <option value="minimal">Minimal</option>
          </select>
        </div>

        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Theme settings are saved but currently only serve as preferences. 
            Full theme customization would require additional implementation.
          </p>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors font-semibold"
        >
          Save Theme Settings
        </button>
      </form>
    </div>
  );
};

export default Admin;
