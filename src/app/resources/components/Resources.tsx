"use client"
import React from 'react'
import { resource } from '../page';
import ResourceCard from './ResourceCard';
import { usePathname, useSearchParams } from 'next/navigation';
export default async function Resources({resources}:{resources:resource[]}) {

  return (
    <div className='grid grid-cols-3 gap-x-8 gap-y-6 w-full'>
      <div>20</div>
      {resources.map((resource: resource, idx: number) => (
            <ResourceCard
              key={idx}
              title={resource.resourceTitle}
              description={resource.resourceDescription}
              link={resource.resourceURL}
              type={resource.resourceType}
              tags={resource.resourceTags}
            />
          ))}
    </div>
  )
}
