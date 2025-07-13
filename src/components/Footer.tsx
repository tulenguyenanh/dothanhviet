import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <Image
                  src="/img/logo.png"
                  alt="Đô Thành Việt Logo"
                  width="60"
                  height="60"
                />
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Công ty dịch vụ vệ sinh Hộ gia đình Đô Thành Việt
              <ul className="list-disc pl-4">
                <li>Văn phòng: 45 mai văn ngọc phường phú nhuận</li>{" "}
                <li>Hotline(24/24): 098 457 88 66</li> <li> Email</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
