export default function CardTitle({ value, className } : { value: string, className?: string }) {
    return (
        <h3 className={className}>{value}</h3>
    )
}