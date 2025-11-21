import Image from 'next/image'

const Logo = () => {
  return (
    <div className='w-full'>
        <Image
            src="/assets/hultprize_logo.svg"
            alt="Hult Prize Logo"
            className='w-[24px] md:w-[60px]'
            width={60}
            height={60}
        />
    </div>
  )
}

export default Logo