// src/components/ui/card.jsx
export function Card({ children, className }) {
    return (
        <div className={`bg-base-100 hover:scale-105 hover:shadow-lg transition duration-300 text-white p-4 rounded-2xl shadow-md ${className}`}>
            {children}
        </div>
    );
}

export function CardContent({ children, className }) {
    return <div className={`p-2 ${className}`}>{children}</div>;
}
  