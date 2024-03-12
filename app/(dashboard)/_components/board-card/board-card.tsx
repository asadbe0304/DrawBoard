'use client'

import Image from "next/image";
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from 'date-fns'
import { Overlay } from "./overlay";
import { Footer } from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Actions } from "@/components/actions";

interface BoardCard {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  createdAt: number;
  imageUrl: string;
  orgId: string;
  isFavorite: string | boolean;
}

export const BoardCard = ({ id, title, authorId, authorName, createdAt, imageUrl, isFavorite }: BoardCard) => {
  const { userId } = useAuth()
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true
  })

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={'Dodle'} fill className="object-fit" />
          <Overlay />
          <Actions id={id} side={'right'} title={title} >
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none ">
              <MoreHorizontal  className="text-white opacity-75 hover:opacity-100 transition-opacity"/>
            </button>
          </Actions>
        </div>
        <Footer
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          isFavorite={false}
          onClick={() => {
            console.log('l');
          }}
          disabled={false}
        />
      </div>
    </Link>
  )
}

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className='aspect-[100/127] border rounded-lg  overflow-hidden'>
      <Skeleton className="h-full w-full" />
    </div>
  )
}