import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './components/Button';
import { Typography } from './components/Typography';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="p-8 space-y-8">
      <Typography variant="h1" as="h1">
        Design System Preview
      </Typography>
      
      <section className="space-y-4">
        <Typography variant="h2" as="h2">Buttons</Typography>
        <div className="flex gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      <section className="space-y-4">
        <Typography variant="h2" as="h2">Typography</Typography>
        <Typography variant="p">
          This is a skeleton design system. Open Storybook to see all components.
        </Typography>

        <Button size="button-lg" variant="primary">
                    Sign in
                </Button>
        
      </section>
    </div>
  </React.StrictMode>
);
