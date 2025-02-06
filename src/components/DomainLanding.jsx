import React from 'react';

const DomainLanding = () => {
  const [domain, setDomain] = React.useState('');
  
  React.useEffect(() => {
    setDomain(window.location.hostname);
  }, []);

  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold">{domain}</h1>
      <div>Domain Landing Page</div>
    </div>
  );
};

export default DomainLanding;
