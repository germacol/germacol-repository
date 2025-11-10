
import React from 'react';
import type { HubDetail } from '../types';

interface HubBadgeProps {
  hub: HubDetail;
  isMain: boolean;
}

const HubBadge: React.FC<HubBadgeProps> = ({ hub, isMain }) => {
  const baseClasses = 'px-3 py-1.5 text-sm rounded-lg shadow-sm flex items-baseline gap-x-2';
  const mainClasses = 'bg-blue-100 text-blue-900 dark:bg-blue-900/50 dark:text-blue-200';
  const secondaryClasses = 'bg-gray-200 text-gray-800 dark:bg-gray-600/50 dark:text-gray-200';
  const linkClasses = 'transition-transform duration-200 hover:scale-105 hover:shadow-lg';

  const airportSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(hub.name)}`;

  return (
    <a
      href={airportSearchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${isMain ? mainClasses : secondaryClasses} ${linkClasses}`}
    >
      <span className="font-mono font-bold">{hub.code}</span>
      <span className="text-xs font-sans font-normal text-gray-700 dark:text-gray-300">{hub.name} ({hub.city})</span>
    </a>
  );
};

export default HubBadge;