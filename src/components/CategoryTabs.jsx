function CategoryTabs({ sections, selectedSection, onSelectSection }) {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-lg overflow-hidden border border-gray-700">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => onSelectSection(section)}
            className={`px-6 py-2 text-sm font-medium transition-colors ${
              selectedSection === section
                ? "bg-gray-700 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
            } ${
              index === 0 ? "rounded-l-lg" : ""
            } ${
              index === sections.length - 1 ? "rounded-r-lg" : ""
            }`}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryTabs; 