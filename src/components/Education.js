import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Education</h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Master of Science in Computer Science</h3>
            <h4 className="text-sm text-muted-foreground">University of Central Missouri</h4>
          </div>

          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Bachelor of Technology in Computer Science and Engineering</h3>
            <h4 className="text-sm text-muted-foreground">G. Narayanamma Institute of Technology & Science (GNITS), JNTU</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
