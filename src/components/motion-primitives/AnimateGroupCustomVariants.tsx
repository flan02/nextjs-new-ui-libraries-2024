import { AnimatedGroup } from '@/components/core/animated-group';

export function AnimatedGroupCustomVariants() {
  return (
    <>
      <AnimatedGroupCustomVariantsAlt />
      <AnimatedGroup
        className='grid grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4'
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
          item: {
            hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: {
                duration: 1.2,
                type: 'spring',
                bounce: 0.3,
              },
            },
          },
        }}
      >
        <img
          src='https://images.beta.cosmos.so/fc6fdd93-552c-47e6-98aa-b8fb3ba070a2?format=jpeg'
          alt='impressionist painting, uploaded to Cosmos'
          className='h-auto w-full rounded-[4px]'
        />
        <img
          src='https://images.beta.cosmos.so/cb674d14-ebd1-4408-bab1-79df895017b6?format=jpeg'
          alt='impressionist painting, uploaded to Cosmos'
          className='h-auto w-full rounded-[4px]'
        />
        <img
          src='https://images.beta.cosmos.so/e5a6c3ed-82ad-4084-9a11-1eccd7bc91aa?format=jpeg'
          alt='impressionist painting, uploaded to Cosmos'
          className='h-auto w-full rounded-[4px]'
        />
        <img
          src='https://images.beta.cosmos.so/4d02a1e7-d1f2-4575-86a9-bed243e59132?format=jpeg'
          alt='impressionist painting, uploaded to Cosmos'
          className='h-auto w-full rounded-[4px]'
        />
      </AnimatedGroup>

    </>
  );
}




function AnimatedGroupCustomVariantsAlt() {
  return (
    <AnimatedGroup
      className='grid h-full grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4'
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        },
        item: {
          hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: -60,
            rotateX: 90,
          },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            rotateX: 0,
            transition: {
              type: 'spring',
              bounce: 0.3,
              duration: 1,
            },
          },
        },
      }}
    >
      <div key={1}>
        <img
          src='/national_geographic_logo.svg'
          alt='Apple Music logo'
          className='h-auto w-full'
        />
      </div>
      <div key={2}>
        <img src='/sony_logo.svg' alt='Chrome logo' className='h-auto w-full' />
      </div>
      <div key={3}>
        <img
          src='/strava_logo.svg'
          alt='Strava logo'
          className='h-auto w-full'
        />
      </div>
      <div key={4}>
        <img
          src='/nintendo_logo.svg'
          alt='Nintendo logo'
          className='h-auto w-full'
        />
      </div>
    </AnimatedGroup>
  );
}
