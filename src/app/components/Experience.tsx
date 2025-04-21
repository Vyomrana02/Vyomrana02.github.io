import Link from 'next/link';
import { MotionDiv } from '../lib/motion';
import { SectionContainer } from './SectionContainer';
import { MoveRight } from 'lucide-react';

export const Experience = () => {
  return (
    <SectionContainer id="experience" title="Experience">
      <div className="flex flex-col gap-8">
        <MotionDiv
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex flex-col gap-6 text-justify text-xl md:text-center sm:text-lg"
        >
          {/* HHAeXchange Experience */}
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-bold text-blue-500">HHAeXchange</h3>
              <p className="text-gray-400 text-right">Associate Software Developer</p>
            </div>
            <p className="text-gray-400">Jan 2024 - Apr 2024</p>
            <ul className="mt-2 list-disc list-inside space-y-2">
              <li>🐞 Resolved critical bugs and performance issues, improving platform reliability.</li>
              <li>🔒 Enhanced user authentication, 🏥 patient management, and 📅 visit scheduling components.</li>
              <li>🤝 Collaborated with cross-functional teams to optimize workflows and system performance.</li>
            </ul>
          </div>

          {/* Calix Experience */}
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-bold text-blue-500">Calix</h3>
              <p className="text-gray-400 text-right">Associate Software Engineer</p>
            </div>
            <p className="text-gray-400">May 2024 - Present</p>
            <ul className="mt-2 list-disc list-inside space-y-2">
              <li>⚡ Developing and optimizing Apache Spark data pipelines for AWS-based data lakes.</li>
              <li>📊 Implemented scalable ETL workflows, reducing data latency and improving efficiency.</li>
              <li>🔄 Collaborating with teams to enhance pipeline performance and streamline data integration.</li>
            </ul>
          </div>

          {/* Contact Link */}
          <MotionDiv className="flex justify-end">
            <Link
              href="#contact"
              className="flex items-center gap-x-2 text-target transition-all hover:gap-x-3 hover:text-[#3385ff]"
            >
              Contact Me <MoveRight />
            </Link>
          </MotionDiv>
        </MotionDiv>
      </div>
    </SectionContainer>
  );
};
