import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <Link href="https://docs.yama-cms.com">Documentation</Link>
                </li>
                <li>
                    <Link href="https://yama-cms.com">Yama CMS</Link>
                </li>
            </ul>
        </footer>
    );
}
