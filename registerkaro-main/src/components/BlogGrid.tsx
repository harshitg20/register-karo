import { ArrowRight } from 'lucide-react';
import image from './../assets/Image.png';
import image1 from './../assets/Image1.png';
import image2 from './../assets/Image2.png';

// Define valid tags as a union of string literals
type Tag = 
  | 'Tax & Audit'
  | 'Management'
  | 'Tax'
  | 'Research'
  | 'Compliance'
  | 'Audit'
  | 'Money Back'
  | 'Money'
  | 'Tax Return'
  | 'News'
  | 'Private Limited Company'
  | 'Customer Success';

interface Blog {
  image: string;
  author: string;
  date: string;
  title: string;
  description: string;
  tags: Tag[]; // tags should be an array of Tag
}

const BlogGrid = () => {
  const blogs: Blog[] = [
    {
      image: image,
      author: 'Prathosh Mehera',
      date: '1 Jan 2023',
      title: 'Small business & Startup',
      description: 'Get to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty!',
      tags: ['Tax & Audit', 'Management'],
    },
    {
      image: image2,
      author: 'Manish Kumar',
      date: '1 Jan 2023',
      title: 'Scale-Up Company Offer',
      description: 'Mental accounting means subdivisions of complex processes or relationships.',
      tags: ['Tax', 'Research', 'Compliance'],
    },
    {
      image: image1,
      author: 'Rakhi Verma',
      date: '1 Jan 2023',
      title: 'Growing Business Package',
      description: 'Introduction to Wireframing and Its Principles. Learn from the best in the industry!',
      tags: ['Audit', 'Money Back'],
    },
    {
      image: image,
      author: 'Kevin Kumar',
      date: '1 Jan 2023',
      title: 'Scale-Up Company Offer',
      description: 'Collaboration can make our teams stronger, and our individual designs better.',
      tags: ['Money', 'Management'],
    },
    {
      image: image1,
      author: 'Runa Singh',
      date: '1 Jan 2023',
      title: 'Scale-Up Company Offer',
      description: 'JavaScript framework makes development easy with extensive features and functionalities.',
      tags: ['Tax Return', 'News', 'Audit'],
    },
    {
      image: image2,
      author: 'Nina None',
      date: '1 Jan 2023',
      title: 'Scale-Up Company Offer',
      description: 'Starting a community doesn’t need to be complicated, but do you get started?',
      tags: ['Private Limited Company', 'Customer Success'],
    },
  ];

  const getTagColor = (tag: Tag): string => {
    const colors: Record<Tag, string> = {
      'Tax & Audit': 'bg-red-100 text-red-600',
      'Management': 'bg-blue-100 text-blue-600',
      'Tax': 'bg-green-100 text-green-600',
      'Research': 'bg-purple-100 text-purple-600',
      'Compliance': 'bg-yellow-100 text-yellow-600',
      'Audit': 'bg-indigo-100 text-indigo-600',
      'Money Back': 'bg-pink-100 text-pink-600',
      'Money': 'bg-cyan-100 text-cyan-600',
      'Tax Return': 'bg-orange-100 text-orange-600',
      'News': 'bg-violet-100 text-violet-600',
      'Private Limited Company': 'bg-emerald-100 text-emerald-600',
      'Customer Success': 'bg-teal-100 text-teal-600',
    };
    return colors[tag] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 uppercase tracking-wide mb-2">EXPLORE OUR BLOGS</p>
          <h2 className="text-3xl font-bold text-gray-900">Accelerate Digital Transformation</h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={`Blog - ${blog.title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{blog.author}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group">
                  <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                    {blog.title}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm">{blog.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-xs ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
            Show more blogs
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
