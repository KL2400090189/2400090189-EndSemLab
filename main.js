import React, { useState } from 'react';
import { FileText, ImageIcon, Code2 } from 'lucide-react';

const NextJsImageJsonDisplay = () => {
  const [activeTab, setActiveTab] = useState('question');

  // Sample JSON data for demonstration
  const sampleData = {
    student: {
      roll_number: 101,
      name: "John Doe",
      department: "Computer Science"
    },
    image_url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400"
  };

  const nextJsCode = `// pages/index.js or app/page.js
import Image from 'next/image';

export default function DisplayPage() {
  // Sample student data
  const studentData = {
    student: {
      roll_number: 101,
      name: "John Doe",
      department: "Computer Science"
    },
    image_url: "/student-photo.jpg"
  };

  return (
    <div className="container">
      <h1>Student Information</h1>
      
      {/* Display JSON Object inside a Next.js page */}
      <div className="json-display">
        <h2>Student Details</h2>
        <div className="details">
          <p><strong>Roll Number:</strong> {studentData.student.roll_number}</p>
          <p><strong>Name:</strong> {studentData.student.name}</p>
          <p><strong>Department:</strong> {studentData.student.department}</p>
        </div>
        
        {/* Display as formatted JSON */}
        <pre>{JSON.stringify(studentData, null, 2)}</pre>
      </div>

      {/* Create a JSON object inside a Next.js page */}
      <div className="image-display">
        <h2>Student Image</h2>
        <Image
          src={studentData.image_url}
          alt="Student Photo"
          width={400}
          height={400}
          priority
        />
      </div>

      <style jsx>{\`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .json-display, .image-display {
          margin: 20px 0;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        .details p {
          margin: 10px 0;
        }
        pre {
          background: #f5f5f5;
          padding: 15px;
          border-radius: 5px;
          overflow-x: auto;
        }
      \`}</style>
    </div>
  );
}`;

  const displayCode = `// Display a student information such as name, roll number, department
// Using basic UI layout

import Image from 'next/image';

export default function StudentProfile() {
  const student = {
    roll_number: 101,
    name: "John Doe",
    department: "Computer Science",
    profile_image: "/images/student.jpg"
  };

  return (
    <div className="profile-card">
      <div className="image-section">
        <Image
          src={student.profile_image}
          alt={student.name}
          width={200}
          height={200}
          className="profile-image"
        />
      </div>
      
      <div className="info-section">
        <h1>{student.name}</h1>
        <div className="info-grid">
          <div className="info-item">
            <span className="label">Roll Number:</span>
            <span className="value">{student.roll_number}</span>
          </div>
          <div className="info-item">
            <span className="label">Department:</span>
            <span className="value">{student.department}</span>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  const renderCode = `// Render the data nicely using any basic UI layout

import Image from 'next/image';

export default function StudentCard() {
  const data = {
    student: {
      roll_number: 101,
      name: "John Doe", 
      department: "Computer Science"
    },
    image_url: "/profile.jpg"
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      borderRadius: '12px',
      backgroundColor: 'white'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <Image
          src={data.image_url}
          alt={data.student.name}
          width={150}
          height={150}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>
          {data.student.name}
        </h2>
        <p style={{ color: '#666', marginBottom: '16px' }}>
          Roll No: {data.student.roll_number}
        </p>
        <p style={{ 
          backgroundColor: '#f0f0f0',
          padding: '8px 16px',
          borderRadius: '20px',
          display: 'inline-block'
        }}>
          {data.student.department}
        </p>
      </div>
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
            <h1 className="text-3xl font-bold mb-2">Question 5: Display Image & JSON Data in Next.js</h1>
            <p className="text-blue-100">Complete implementation with code examples</p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('question')}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                activeTab === 'question'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <FileText size={20} />
              Question
            </button>
            <button
              onClick={() => setActiveTab('demo')}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                activeTab === 'demo'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <ImageIcon size={20} />
              Live Demo
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                activeTab === 'code'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Code2 size={20} />
              Code Examples
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            {activeTab === 'question' && (
              <div className="space-y-6">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                  <h2 className="text-xl font-bold text-amber-900 mb-4">Question Requirements:</h2>
                  <div className="space-y-3 text-amber-900">
                    <p>• <strong>You are building a simple Next.js page to display student details along with an image.</strong></p>
                    <p>• <strong>Create a JSON object inside a Next.js page.</strong></p>
                    <p>• <strong>Display student information such as name, roll number, department.</strong></p>
                    <p>• <strong>Display a profile image above the student details.</strong></p>
                    <p>• <strong>Render the data nicely using any basic UI layout.</strong></p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Concepts:</h3>
                  <div className="space-y-2 text-blue-900">
                    <p>✓ Using Next.js Image component for optimized images</p>
                    <p>✓ Creating and displaying JSON data</p>
                    <p>✓ Basic UI layout and styling</p>
                    <p>✓ Responsive design principles</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'demo' && (
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Student Profile Card</h2>
                  
                  <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-32"></div>
                    <div className="relative px-8 pb-8">
                      <div className="flex justify-center -mt-16 mb-6">
                        <img
                          src={sampleData.image_url}
                          alt="Student"
                          className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                        />
                      </div>
                      
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {sampleData.student.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          Roll No: {sampleData.student.roll_number}
                        </p>
                        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                          {sampleData.student.department}
                        </span>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-700 mb-2 text-sm">JSON Data:</h4>
                        <pre className="text-xs bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
{JSON.stringify(sampleData, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'code' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">1. Complete Implementation with JSON & Image</h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{nextJsCode}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">2. Display Student Information</h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{displayCode}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">3. Styled Card Layout</h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{renderCode}</code>
                  </pre>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-900">Important Notes:</h3>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Use Next.js <code className="bg-green-100 px-2 py-1 rounded">Image</code> component for automatic optimization</li>
                    <li>• Images must be in the <code className="bg-green-100 px-2 py-1 rounded">public</code> folder or from external URLs</li>
                    <li>• For external images, configure domains in <code className="bg-green-100 px-2 py-1 rounded">next.config.js</code></li>
                    <li>• Always specify width and height for the Image component</li>
                    <li>• Use responsive design for mobile compatibility</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextJsImageJsonDisplay;
