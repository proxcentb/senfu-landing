export default function Footer() {
  return (
    <footer className="bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex-1 border-t border-gray-300">
          <p className="text-center text-sm text-gray-600 py-2">
            © 2023 Relume. All rights reserved.
          </p>
        </div>
        <div className="flex-1 border-t border-gray-300 flex justify-end">
          <a href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900 py-2 px-4">Privacy Policy</a>
          <a href="/terms-of-service" className="text-sm text-gray-600 hover:text-gray-900 py-2 px-4">Terms of Service</a>
          <a href="/cookie-settings" className="text-sm text-gray-600 hover:text-gray-900 py-2 px-4">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}
