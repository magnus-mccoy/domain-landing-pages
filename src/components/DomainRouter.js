import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const domainConfig = {
  'wpicus.com': {
    type: 'preserve',
    links: ['/docs', '/tutorials', '/wordpress'],
    redirectTo: null
  },
  'themes-demo.com': {
    type: 'redirect',
    links: [],
    redirectTo: 'agentius.ai/themes'
  },
  // Add other domains following the same pattern
};

const DomainRouter = () => {
  const currentDomain = window.location.hostname;
  const config = domainConfig[currentDomain];

  if (!config) {
    return <div>Domain not configured</div>;
  }

  if (config.type === 'redirect') {
    window.location.href = config.redirectTo;
    return null;
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">{currentDomain}</h1>
        </CardHeader>
        <CardContent>
          <nav>
            {config.links.map(link => (
              <a 
                key={link}
                href={link}
                className="block p-2 hover:bg-gray-100 rounded"
              >
                {link}
              </a>
            ))}
          </nav>
        </CardContent>
      </Card>
    </div>
  );
};

export default DomainRouter;
