export default function CardContent({ value, className } : { value: string, className?: string }) {
    return (
        <p className={className}>{value}</p>
    )
}