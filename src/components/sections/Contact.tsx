import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Contact Me
        </h2>
        <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-400">
          I’d love to hear from you! Here’s how you can reach me.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="p-4 bg-purple-200 dark:bg-purple-700 rounded-full">
              <Mail className="w-8 h-8 text-purple-600 dark:text-purple-300" />
            </div>
            <h4 className="text-lg font-medium mt-4 text-gray-800 dark:text-gray-100">
              Email
            </h4>
            <a
              href="mailto:a16raj@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors mt-1"
            >
              a16raj@gmail.com
            </a>
          </div>
          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="p-4 bg-purple-200 dark:bg-purple-700 rounded-full">
              <Phone className="w-8 h-8 text-purple-600 dark:text-purple-300" />
            </div>
            <h4 className="text-lg font-medium mt-4 text-gray-800 dark:text-gray-100">
              Phone
            </h4>
            <a
              href="tel:+916202469148"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors mt-1"
            >
              +91 6202469148
            </a>
          </div>
          {/* Location */}
          <div className="flex flex-col items-center">
            <div className="p-4 bg-purple-200 dark:bg-purple-700 rounded-full">
              <MapPin className="w-8 h-8 text-purple-600 dark:text-purple-300" />
            </div>
            <h4 className="text-lg font-medium mt-4 text-gray-800 dark:text-gray-100">
              Location
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Ranchi, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}