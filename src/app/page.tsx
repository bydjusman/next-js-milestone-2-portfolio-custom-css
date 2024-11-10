
// import Header from './Component/header';

// import Footer from './Component/footer';

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <main>
//         <h1>Welcome to My Website</h1>
//         <p>This is the homepage of our multi-page site built with Next.js.</p>
//       </main>
//       <Footer />
//     </>
//   );
// }

import Header from './Component/header';
import Footer from './Component/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section>
          <h1>Welcome to My Website</h1>
          <p>This is the homepage of our multi-page site built with Next.js.</p>
        </section>

        {/* Introduction Section */}
        <section>
          <h2>About Our Site</h2>
          <p>
            Our website is designed to provide you with valuable information and resources. We
            specialize in creating user-friendly experiences and responsive designs.
          </p>
        </section>

        {/* Features Section */}
        <section>
          <h2>Features</h2>
          <ul>
            <li>Responsive Design - Works on all devices</li>
            <li>Built with Next.js for fast loading times</li>
            <li>Easy Navigation between pages</li>
            <li>Styled with Custom CSS</li>
          </ul>
        </section>

        {/* Call-to-Action Section */}
        <section>
          <h2>Get in Touch</h2>
          <p>
            Want to learn more about what we do? Feel free to visit our <a href="/about">About</a>{' '}
            page or reach out on the <a href="/contact">Contact</a> page.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
