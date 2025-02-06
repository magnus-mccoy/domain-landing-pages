import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const DomainLanding = () => {
  const [domain, setDomain] = React.useState('');
  
  React.useEffect(() => {
    setDomain(window.location.hostname);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">{domain}</h1>
        </CardHeader>
        <CardContent>
          <div>Domain Landing Page</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DomainLanding;
