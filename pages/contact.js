import Link from 'next/link'


export default function Contact() {
    return (
        <div>
            <h1 class="text-3xl font-extrabold">Contact</h1>
            <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/product"><a>Products</a></Link></li>
        <li><Link href="/services"><a>Services</a></Link></li>
        <li><Link href="/outsourcing"><a>Outsourcing</a></Link></li>
        <li><Link href="/contact"><a>Contact Us</a></Link></li>
      </ul>

        </div>
    )
}