import Heading from '@/app/components/common/Heading';
import Image from 'next/image';

const ImageContainer = ({ src,  title, description, order }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 h-full  py-12 ">
      <div className={`relative w-full h-[300px] lg:h-full min-h-[400px] ${order ? 'order-1' : 'order-2'} `}>
        <Image
        alt={title}
          src={src}
          fill
          className="object-cover "
          priority={true} 
        />
      </div>

      <div className={`flex items-center  h-full ${order ? 'order-2' : 'order-1'} `}>
        <div className="max-w-md lg:p-8">
            <Heading>
                {title}
            </Heading>
          <div className="text-sm leading-7">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;