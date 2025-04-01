import Image from 'next/image';
// import loadingGif from '@/components/loading/Drawing flower.gif';
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image src="/components/loading/Drawing flower.gif" alt="Loading..." width={100} height={100} />
    </div>
  );
};

export default Loading;