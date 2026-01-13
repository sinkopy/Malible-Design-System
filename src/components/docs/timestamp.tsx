interface TimestampProps {
  date: string; // DD-MM-YYYY format
}

export function Timestamp({ date }: TimestampProps) {
  return (
    <p className="text-xs text-muted-foreground">
      Last updated: {date}
    </p>
  );
}
