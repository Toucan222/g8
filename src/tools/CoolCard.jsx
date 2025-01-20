import React from 'react';
import { useToast } from '../components/ToastContext';
import './CoolCardStyles.scss';

export default function CoolCard({
  title = 'Untitled Tool',
  description = 'No description available.',
  onAction = () => {}
}) {
  const { showToast } = useToast();

  // Example "Share" handler that copies a link or text
  const handleShare = () => {
    const sampleLink = 'https://sp8.netlify.app'; // Replace with actual link
    navigator.clipboard.writeText(sampleLink);
    showToast('Link copied to clipboard!');
  };

  return (
    <div className="cool-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>

      <div className="button-row">
        <button className="card-button" onClick={onAction}>
          Try It
        </button>
        <button className="card-button share-button" onClick={handleShare}>
          Share
        </button>
      </div>
    </div>
  );
}
