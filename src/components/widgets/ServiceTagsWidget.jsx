"use client"
import React, { useEffect, useState } from 'react';
import ServiceTagsWidgetData from '@/assets/jsonData/services/ServiceTagsWidgetData.json';
import Link from 'next/link';

const ServiceTagsWidget = () => {

  const defaultActiveId = 2;
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const storedActiveId = sessionStorage.getItem('activeId');
    if (storedActiveId) {
      setActiveId(parseInt(storedActiveId));
    } else {
      setActiveId(defaultActiveId);
      sessionStorage.setItem('activeId', defaultActiveId);
    }
  }, []);

  const handleItemClick = (id) => {
    setActiveId(id);
    // Store the activeId in session storage
    sessionStorage.setItem('activeId', id);
  };

  return (
    <>
      <div className="single-widget services-list-widget">
        <h4 className="widget-title">Services</h4>
        <ul>
          {ServiceTagsWidgetData.map(tag =>
            <li
              key={tag.id}
              className={tag.id === activeId ? 'current-item' : ''}
              onClick={() => handleItemClick(tag.id)}
            >
              <Link href={`/services-details/${tag.id}`}>{tag.tags}<i className={tag.icon}></i></Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default ServiceTagsWidget;