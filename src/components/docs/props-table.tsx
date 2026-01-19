interface PropRow {
    name: string
    type: string
    default?: string
    description: string
}

interface PropsTableProps {
    props: PropRow[]
}

export function PropsTable({ props }: PropsTableProps) {
    return (
        <div className="my-6 w-full overflow-y-auto rounded-xl border border-border/50">
            <table className="w-full text-left text-sm">
                <thead className="border-b border-border/40 bg-muted/20">
                    <tr className="flex">
                        <th className="flex-1 px-4 py-3 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Prop</th>
                        <th className="flex-1 px-4 py-3 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Type</th>
                        <th className="flex-1 px-4 py-3 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Default</th>
                        <th className="flex-[2] px-4 py-3 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Description</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                    {props.map((prop) => (
                        <tr key={prop.name} className="flex">
                            <td className="flex-1 px-4 py-3 bg-muted/5 flex items-center">
                                <code className="text-[13px] font-mono text-foreground/80 bg-muted/20 border border-border/30 px-1.5 py-0.5 rounded leading-none">
                                    {prop.name}
                                </code>
                            </td>
                            <td className="flex-1 px-4 py-3 font-mono text-[13px] text-muted-foreground/90 whitespace-pre flex items-center">
                                {prop.type}
                            </td>
                            <td className="flex-1 px-4 py-3 font-mono text-[13px] text-muted-foreground/70 flex items-center">
                                {prop.default || "-"}
                            </td>
                            <td className="flex-[2] px-4 py-3 text-[13px] text-muted-foreground leading-relaxed flex items-center">
                                {prop.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
