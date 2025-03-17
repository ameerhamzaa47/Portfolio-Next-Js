// import GithubIcon from '/images/github-icon.svg'
// import LinkedinIcon from '/images/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>

        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
            <div className='flex flex-row gap-2'>
                <Link href='https://github.com/ameerhamzaa47' target='_blank'>
                <Image src={'/images/github-icon.svg'} width={60} height={60} alt='Github Icon'/>
                </Link>
                <Link href='https://www.linkedin.com/in/ameer-hamza-9a93a82b6/' target='_blank'>
                <Image src={'/images/linkedin-icon.svg'} width={60} height={60} alt='Linkedin Icon'/>
                </Link>
            </div>
        </div>

        <div>
            <form className='flex flex-col'>
                <div className='mb-6'>
                <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                <input type="email" id="email" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' required placeholder='example@gmail.com' />
                </div>
                <div className='mb-6'>
                <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                <input type="text" id="subject" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' required placeholder='Just Saying Hi' />
                </div>
                <div className='mb-6'>
                <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>Message</label>
                <textarea id="message" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' required placeholder="Let's talk about..." />
                </div>
                <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full cursor-pointer'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
