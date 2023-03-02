import { format, parseISO } from "date-fns";

export default function Date({ date }) {
  return <time dateTime={date}>{format(parseISO(date), "dd LLLL yyyy")}</time>;
}
