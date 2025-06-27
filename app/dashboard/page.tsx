"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboard, Sun } from "lucide-react";
import Link from "next/link";
import {
  Calendar,
  Download,
  Search,
  Filter,
  ChevronDown,
  MoreHorizontal,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Building,
  Bed,
  Moon,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { generateReservationData, totalPages } from "@/lib/mockData";
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
// Mock data for the dashboard
const dashboardStats = [
  {
    title: "Daily Check-in",
    value: "5,000",
    change: "+0.5%",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
  {
    title: "Daily Check-out",
    value: "5,000",
    change: "+0.5%",
    icon: Clock,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "New Bookings",
    value: "5,000",
    change: "+0.5%",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    title: "Total Cancellation",
    value: "5,000",
    change: "+0.5%",
    icon: XCircle,
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
  },
  {
    title: "Pending bookings",
    value: "5,000",
    change: "+0.5%",
    icon: AlertCircle,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    title: "Total Extended",
    value: "5,000",
    change: "+0.5%",
    icon: TrendingUp,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
  },
  {
    title: "Total Bookings",
    value: "5,000",
    change: "+0.5%",
    icon: Building,
    color: "text-teal-600",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
  },
  {
    title: "Total Commission",
    value: "₦500,000",
    change: "+0.5%",
    icon: DollarSign,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
  },
];
const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    name: "Overview",
    href: "/overview",
    icon: LayoutDashboard,
    active: true,
  },
];

export default function Dashboard() {
  const [dateRange, setDateRange] = useState({
    from: "Jan 2025",
    to: "Dec 2025",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [reservationData, setReservationData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const { user, signout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  // Load data when page changes
  useEffect(() => {
    setIsLoading(true);
    // Simulate API call delay
    const timer = setTimeout(() => {
      const newData = generateReservationData(currentPage);
      setReservationData(newData);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentPage]);

  // Generate page numbers for pagination
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <>
      <div className="min-h-screen w-screen max-w-screen overflow-x-hidden flex flex-row gap-2 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 p-4 bg-[#F2F2F7] dark:bg-gray-900">
        <motion.div
          initial={false}
          animate={{
            width: isSidebarCollapsed ? 80 : 256,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col relative min-h-screen rounded-lg shadow-md transition-all duration-200 overflow-hidden"
        >
          <div
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="m-4 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ml-auto"
          >
            {isSidebarCollapsed ? (
              <ChevronRight className="h-10 w-10 text-[#7E0140]" />
            ) : (
              <ChevronLeft className="h-10 w-10 text-[#7E0140]" />
            )}
          </div>

          <AnimatePresence>
            {!isSidebarCollapsed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="p-4 border-b border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" />
                    <AvatarFallback className="bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                      {user?.firstName?.[0]}
                      {user?.lastName?.[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {user?.firstName} {user?.lastName}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Travel Agent
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <nav className="flex-1 items-start p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  (item.name === "Dashboard" &&
                    pathname.startsWith("/dashboard"));

                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-[#660133] text-white font-medium"
                          : "text-black hover:bg-[#F9F2F5] hover:text-[#660133]"
                      }`}
                      title={isSidebarCollapsed ? item.name : undefined}
                    >
                      <item.icon
                        className={`h-5 w-5 ${
                          isActive
                            ? "text-white dark:text-purple-300"
                            : "text-gray-500 dark:text-gray-400"
                        } ${isSidebarCollapsed ? "mx-auto" : ""}`}
                      />
                      <AnimatePresence>
                        {!isSidebarCollapsed && (
                          <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="p-4   ">
              <AnimatePresence mode="wait">
                {!isSidebarCollapsed ? (
                  <motion.div
                    key="expanded-theme"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Dark Mode
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleTheme}
                      className="p-2"
                    >
                      {isDarkMode ? (
                        <Sun className="h-4 w-4" />
                      ) : (
                        <Moon className="h-4 w-4" />
                      )}
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="collapsed-theme"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex justify-center"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleTheme}
                      className="p-2"
                      title={
                        isDarkMode
                          ? "Switch to Light Mode"
                          : "Switch to Dark Mode"
                      }
                    >
                      {isDarkMode ? (
                        <Sun className="h-4 w-4" />
                      ) : (
                        <Moon className="h-4 w-4" />
                      )}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </motion.div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center overflow-x-auto">
          <div className="w-full max-w-7xl mx-auto">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 sticky top-0 z-10 rounded-lg ">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Overview
                  </h1>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search"
                      className="pl-10 w-80 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                      <span>From:</span>
                      <Select
                        value={dateRange.from}
                        onValueChange={(value) =>
                          setDateRange({ ...dateRange, from: value })
                        }
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Jan 2025">Jan 2025</SelectItem>
                          <SelectItem value="Feb 2025">Feb 2025</SelectItem>
                          <SelectItem value="Mar 2025">Mar 2025</SelectItem>
                        </SelectContent>
                      </Select>
                      <span>To:</span>
                      <Select
                        value={dateRange.to}
                        onValueChange={(value) =>
                          setDateRange({ ...dateRange, to: value })
                        }
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Dec 2025">Dec 2025</SelectItem>
                          <SelectItem value="Nov 2025">Nov 2025</SelectItem>
                          <SelectItem value="Oct 2025">Oct 2025</SelectItem>
                        </SelectContent>
                      </Select>
                    </div> */}
                <Button className="bg-[#7E0140] hover:bg-[#660133] text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </div>
            </div>

            <div className="p-4 md:p-6 w-full">
              {/* <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 pb-4 ml-auto">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 pb-4">
                  <span>From:</span>
                  <Select
                    value={dateRange.from}
                    onValueChange={(value) =>
                      setDateRange({ ...dateRange, from: value })
                    }
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Jan 2025">Jan 2025</SelectItem>
                      <SelectItem value="Feb 2025">Feb 2025</SelectItem>
                      <SelectItem value="Mar 2025">Mar 2025</SelectItem>
                    </SelectContent>
                  </Select>
                  <span>To:</span>
                  <Select
                    value={dateRange.to}
                    onValueChange={(value) =>
                      setDateRange({ ...dateRange, to: value })
                    }
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dec 2025">Dec 2025</SelectItem>
                      <SelectItem value="Nov 2025">Nov 2025</SelectItem>
                      <SelectItem value="Oct 2025">Oct 2025</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div> */}
              <div className="flex items-center pb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 ml-auto">
                  <span>From:</span>
                  <Select
                    value={dateRange.from}
                    onValueChange={(value) =>
                      setDateRange({ ...dateRange, from: value })
                    }
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Jan 2025">Jan 2025</SelectItem>
                      <SelectItem value="Feb 2025">Feb 2025</SelectItem>
                      <SelectItem value="Mar 2025">Mar 2025</SelectItem>
                    </SelectContent>
                  </Select>
                  <span>To:</span>
                  <Select
                    value={dateRange.to}
                    onValueChange={(value) =>
                      setDateRange({ ...dateRange, to: value })
                    }
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dec 2025">Dec 2025</SelectItem>
                      <SelectItem value="Nov 2025">Nov 2025</SelectItem>
                      <SelectItem value="Oct 2025">Oct 2025</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* <div className="p-6"> */}
              {/* Stats Grid */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
              >
                {dashboardStats.map((stat, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card
                      className="hover:shadow-lg transition-shadow duration-200     dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                      style={{
                        border: "2px solid #C3C3C4",
                        borderRadius: "16px",
                      }}
                    >
                      <CardContent className="p-4 ">
                        <div className="flex items-center justify-start space-x-4">
                          <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                            <stat.icon className={`h-6 w-6 ${stat.color}`} />
                          </div>
                          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                            {stat.title}
                          </h3>
                        </div>
                        <div className="mt-4 flex items-center justify-start space-x-2">
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {stat.value}
                          </p>{" "}
                          <Badge
                            variant="secondary"
                            className="text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400"
                          >
                            {stat.change}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Filters */}
              <motion.div {...fadeInUp}>
                <div className="flex items-center justify-between mb-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 md:p-6 mb-6 space-x-">
                  <Select defaultValue="reservation">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reservation">Reservation</SelectItem>
                      <SelectItem value="booking">Booking</SelectItem>
                      <SelectItem value="payment">Payment</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="stay-status">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Stay status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="stay-status">Stay status</SelectItem>
                      <SelectItem value="stayed">Stayed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                      <SelectItem value="no-show">No-show</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="all-properties">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="All Properties" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-properties">
                        All Properties
                      </SelectItem>
                      <SelectItem value="ivy-hotel">Ivy Hotel</SelectItem>
                      <SelectItem value="grand-hotel">Grand Hotel</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="all-guest">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="All Guest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-guest">All Guest</SelectItem>
                      <SelectItem value="vip">VIP Guests</SelectItem>
                      <SelectItem value="regular">Regular Guests</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      From:
                    </span>
                    <Input
                      type="date"
                      defaultValue="2025-01-01"
                      className="w-40"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      To:
                    </span>
                    <Input
                      type="date"
                      defaultValue="2025-12-31"
                      className="w-40"
                    />
                    <Button className="bg-[#7E0140] hover:bg-[#660133] text-white">
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Reservation Statement Table */}
              <motion.div {...fadeInUp}>
                <Card className="border-0 bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                      Reservation Statement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto max-w-full">
                      {isLoading ? (
                        <div className="flex items-center justify-center py-12">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                          <span className="ml-2 text-gray-600 dark:text-gray-400">
                            Loading...
                          </span>
                        </div>
                      ) : (
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-gray-50 dark:bg-gray-700/50">
                              <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                                Guest name/ID
                              </TableHead>
                              <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                                Arrival
                              </TableHead>
                              <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                                Departure
                              </TableHead>
                              <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                                Rooms
                              </TableHead>
                              <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                                Nights
                              </TableHead>
                              <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                                Amount
                              </TableHead>
                              <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                                Final Amount
                              </TableHead>
                              <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                                Commission
                              </TableHead>
                              <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                                Status
                              </TableHead>
                              <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                                Property Name/ID
                              </TableHead>
                              <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                                Action
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {reservationData.map((reservation, index) => (
                              <TableRow
                                key={index}
                                className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                              >
                                <TableCell>
                                  <div>
                                    <div className="font-medium text-gray-900 dark:text-white">
                                      {reservation.guestName}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                      {reservation.id}
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell className="text-gray-700 dark:text-gray-300">
                                  {reservation.arrival}
                                </TableCell>
                                <TableCell className="text-gray-700 dark:text-gray-300">
                                  {reservation.departure}
                                </TableCell>
                                <TableCell className="text-gray-700 dark:text-gray-300">
                                  {reservation.rooms}
                                </TableCell>
                                <TableCell className="text-gray-700 dark:text-gray-300">
                                  {reservation.nights}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900 dark:text-white">
                                  {reservation.amount}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900 dark:text-white">
                                  {reservation.finalAmount}
                                </TableCell>
                                <TableCell className="font-medium text-green-600 dark:text-green-400">
                                  {reservation.commission}
                                </TableCell>
                                <TableCell>
                                  <Badge className={reservation.statusColor}>
                                    {reservation.status}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-gray-700 dark:text-gray-300">
                                  {reservation.propertyId}
                                </TableCell>
                                <TableCell>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="sm">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem>
                                        View Details
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        Edit Booking
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        Cancel Booking
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      )}
                    </div>

                    {/* Enhanced Pagination */}
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Showing page {currentPage} of {totalPages}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setCurrentPage(Math.max(1, currentPage - 1))
                          }
                          disabled={currentPage === 1}
                          className="flex items-center"
                        >
                          <ChevronLeft className="h-4 w-4 mr-1" />
                          Previous
                        </Button>

                        <div className="flex items-center space-x-1">
                          {generatePageNumbers().map((page, index) => (
                            <React.Fragment key={index}>
                              {page === "..." ? (
                                <span className="px-2 py-1 text-gray-500">
                                  ...
                                </span>
                              ) : (
                                <Button
                                  variant={
                                    currentPage === page ? "default" : "outline"
                                  }
                                  size="sm"
                                  className={`w-8 h-8 p-0 ${
                                    currentPage === page
                                      ? "bg-[#7E0140] hover:bg-[#660133] text-white"
                                      : ""
                                  }`}
                                  onClick={() => setCurrentPage(page as number)}
                                >
                                  {page}
                                </Button>
                              )}
                            </React.Fragment>
                          ))}
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setCurrentPage(
                              Math.min(totalPages, currentPage + 1)
                            )
                          }
                          disabled={currentPage === totalPages}
                          className="flex items-center"
                        >
                          Next
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Go to page:
                        </span>
                        <Input
                          type="number"
                          min="1"
                          max={totalPages}
                          value={currentPage}
                          onChange={(e) => {
                            const page = parseInt(e.target.value);
                            if (page >= 1 && page <= totalPages) {
                              setCurrentPage(page);
                            }
                          }}
                          className="w-16 h-8 text-center"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
