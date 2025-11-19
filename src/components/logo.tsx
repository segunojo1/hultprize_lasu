import Image from 'next/image'

const Logo = () => {
  return (
    <div className='w-full'>
        <Image
            src="/assets/hultprize_logo.svg"
            alt="Hult Prize Logo"
            width={60}
            height={60}
        />
    </div>
  )
}

export default Logo