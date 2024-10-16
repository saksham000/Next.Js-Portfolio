import dynamic from 'next/dynamic'
import React from 'react'

// Dynamically import RecentProjects with no SSR
const RecentProjects = dynamic(() => import('./RecentProjects'), { ssr: false });

const ParentComponent = () => {
    return (
        <div>
            {/* Other content here */}
            <RecentProjects />
        </div>
    )
}

export default ParentComponent;
