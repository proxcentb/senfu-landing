export default function ContactSection() {
  return (
    <footer className="bg-white py-12 px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-start">
        {/* Info Section */}
        <div className="flex flex-col items-start">
          <div className="mb-4">
            {/* Placeholder for email icon */}
            
          </div>
          <h3 className="text-xl font-semibold mb-2">info</h3>
          <p className="mb-4">Feel free to reach out to us for any inquiries or questions you may have.</p>
          <a href="mailto:hello@senfu.com" className="text-blue-600 hover:underline">hello@senfu.com</a>
        </div>
      </div>
    </footer>
  );
}
