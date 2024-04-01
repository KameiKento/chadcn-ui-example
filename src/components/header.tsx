import { Building2, LogOut, Menu, Settings, User } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between h-16 border-b bg-background px-4 md:px-6 lg:px-16 2xl:px-20">
      <nav className="hidden md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex gap-2 items-center font-semibold text-lg md:text-base"
        >
          <Building2 className="h-8 w-8" />
          <span className="sr-only">Jump!</span>
        </Link>
        <Link
          href="#"
          className="text-foreground transition-colors hover:text-foreground"
        >
          メンター一覧
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Jump!について
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          お問い合わせ
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">トグルナビゲーションメニュー</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Building2 className="h-6 w-6" />
              <span className="sr-only">Jump!</span>
            </Link>
            <Link href="#" className="hover:text-foreground">
              メンター一覧
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Jump!について
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              お問い合わせ
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="rounded-full p-0 h-9">
              <Image
                className="rounded-full m-0 select-none"
                alt="avter"
                src="https://avatars.githubusercontent.com/u/124599?v=4"
                width={36}
                height={36}
                draggable="false"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>アカウントメニュー</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="#">
                <User className="mr-2 w-4 h-4" />
                <span>マイページ</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#">
                <Settings className="mr-2 w-4 h-4" />
                <span>ユーザー設定</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="#">
                <LogOut className="mr-2 w-4 h-4" />
                <span>ログアウト</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
