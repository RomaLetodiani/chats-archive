import { Features } from './features.data';

export const FeaturesSection = () => (
  <div className='relative z-20 space-y-6 text-sm'>
    {Features.map((feature, index) => (
      <div key={index} className='group space-y-3 transition-all'>
        <div className='flex items-center space-x-3'>
          {feature.icon}
          <h3 className='text-lg font-bold tracking-tight text-white/90 group-hover:text-white'>
            {feature.title}
          </h3>
        </div>
        <p className='pl-9 leading-relaxed text-white/70 group-hover:text-white/90'>
          {feature.description}
        </p>
      </div>
    ))}
  </div>
);
