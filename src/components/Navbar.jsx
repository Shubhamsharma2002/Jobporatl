'use client';

import Link from "next/link";
import { Briefcase } from "lucide-react";

export default function Navbar() {
    const user_Role = "JOB_SEEKER";

    const navLinksConfig = {
        JOB_SEEKER: [
            { href: "/jobs", label: "Find Jobs" },
            { href: "/my-applications", label: "My Applications" },
            { href: "/settings", label: "Settings" },
        ],
        EMPLOYER: [
            { href: "/add-job", label: "Add Job" },
            { href: "/applications", label: "Submissions" },
            { href: "/settings", label: "For Employers" },
        ],
    };

    return (
        <header className="w-full px-10 py-3 flex justify-between border-b">
            <h4 className="font-bold text-lg flex items-center gap-2">
                <Briefcase /> QuickHire
            </h4>

            {user_Role ? (
                <div className="space-x-4 flex items-center">
                    {navLinksConfig[user_Role].map((e, i) => (
                        <Link key={i} href={e.href} className="hover:underline text-sm font-medium">
                            {e.label}
                        </Link>
                    ))}
                </div>
            ) : (
                <Link href="/sign-up" className="text-sm font-medium">
                    Sign up
                </Link>
            )}
        </header>

       
    );
}
