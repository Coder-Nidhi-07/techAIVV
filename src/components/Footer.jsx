import React from 'react'
import Logo from './Logo'


export default function Footer() {
return (
<footer className="mt-12 border-t bg-white/60 border-slate-200">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row md:justify-between gap-4">
<div className="flex items-center gap-3"><Logo /><div className="text-sm text-slate-600">© {new Date().getFullYear()} TechAIVV</div></div>
<div className="text-sm text-slate-600">Designed for conversions • Privacy • Terms</div>
</div>
</footer>
)
}