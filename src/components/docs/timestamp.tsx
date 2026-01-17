interface TimestampProps {
  date: string; // DD-MM-YYYY HH:mm format
}

export function Timestamp({ date }: TimestampProps) {
  const formatCompactDate = (dateStr: string) => {
    // Split date and time
    const [datePart, timePart] = dateStr.split(" ");
    const [day, month, year] = datePart.split("-").map(Number);

    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const getOrdinal = (n: number) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    const formattedDay = getOrdinal(day);
    const monthName = months[month - 1];

    // If no time is provided, just return the date
    if (!timePart) return `${formattedDay} ${monthName} ${year}`;

    return `${formattedDay} ${monthName} ${year}, ${timePart}`;
  };

  return (
    <p className="text-xs text-muted-foreground mt-8">
      Last updated: {formatCompactDate(date)}
    </p>
  );
}
