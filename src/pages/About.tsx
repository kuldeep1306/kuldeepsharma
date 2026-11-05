function About() {
  return (
    <section className="page-content reveal delay-1">
      <h1>About Me</h1>
      <p>
        Hi, I'm Kuldeep Sharma, a Backend Developer based in Bengaluru, Karnataka,
        specializing in building high-performance server-side architectures, RESTful APIs,
        and scalable database systems with Node.js, Express, PostgreSQL, MongoDB, and Redis.
      </p>
      <p>
        Currently, I am working as a Backend Developer Intern at Keys on Rent, where I develop
        production backend services, design relational and NoSQL schemas using PostgreSQL with
        Prisma ORM and MongoDB, and maintain automated CI/CD pipelines on GitHub Actions.
      </p>
      <p>
        I have founded and independently architected DeepInDiary — a live public platform for
        anonymously reporting scams, hidden truths, and crime news, deployed on Render and Vercel.
        I enjoy turning complex product requirements into robust, secure, and clean server architectures.
      </p>

      <h2 className="page-subheading">What I Do</h2>
      <div className="feature-grid">
        <article>
          <h2>Backend Architecture</h2>
          <p>
            Designing scalable, clean REST APIs with Node.js, Express, and TypeScript,
            implementing JWT and Clerk authentication, and following industry best practices.
          </p>
        </article>
        <article>
          <h2>Database Engineering</h2>
          <p>
            Schema design, indexing, and query optimization across PostgreSQL (Prisma ORM)
            and MongoDB (Mongoose), coupled with Redis caching for low-latency responses.
          </p>
        </article>
        <article>
          <h2>Cloud & CI/CD</h2>
          <p>
            Automating testing and deployment workflows using GitHub Actions pipelines,
            cloud hosting on AWS, Render, Vercel, and database management with MongoDB Atlas.
          </p>
        </article>
      </div>

      <h2 className="page-subheading">Core Principles</h2>
      <ul>
        <li>
          <strong>Performance First:</strong> Writing optimized queries, lean data schemas, and efficient caching.
        </li>
        <li>
          <strong>Clean & Secure Code:</strong> Strict validation, secure authentication, and robust authorization.
        </li>
        <li>
          <strong>Production Reliability:</strong> Automated CI/CD, proactive error handling, and scalable cloud deployments.
        </li>
        <li>
          <strong>Continuous Growth:</strong> Deepening expertise across distributed systems, algorithms, and cloud services.
        </li>
      </ul>
    </section>
  );
}

export default About;
