"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Conversation, Message, User } from "@prisma/client";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";

interface ConversationBoxProps {
  data: any;
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = () => {
  return <div>asdasd</div>;
};

export default ConversationBox;
