// Mock data for different pagination pages
export const generateReservationData = (page: number) => {
  const baseData = [
    // Page 1 data
    [
      {
        id: '#1234567',
        guestName: 'John Doe',
        arrival: 'Oct 1, 2025',
        departure: 'Oct 1, 2025',
        rooms: 10,
        nights: 10,
        amount: '₦150,000',
        finalAmount: '₦150,000',
        commission: '',
        status: 'No-show',
        propertyId: 'Ivy Hotel #23456',
        statusColor: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
      },
      {
        id: '#1234568',
        guestName: 'Jane Smith',
        arrival: 'Oct 2, 2025',
        departure: 'Oct 2, 2025',
        rooms: 5,
        nights: 3,
        amount: '₦75,000',
        finalAmount: '₦75,000',
        commission: '₦3,750',
        status: 'Stayed',
        propertyId: 'Grand Hotel #34567',
        statusColor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      },
      {
        id: '#1234569',
        guestName: 'Mike Johnson',
        arrival: 'Oct 3, 2025',
        departure: 'Oct 5, 2025',
        rooms: 2,
        nights: 2,
        amount: '₦120,000',
        finalAmount: '₦120,000',
        commission: '',
        status: 'Cancelled',
        propertyId: 'Luxury Suites #45678',
        statusColor: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      },
      {
        id: '#1234570',
        guestName: 'Sarah Wilson',
        arrival: 'Oct 4, 2025',
        departure: 'Oct 6, 2025',
        rooms: 8,
        nights: 2,
        amount: '₦200,000',
        finalAmount: '₦200,000',
        commission: '₦10,000',
        status: 'Stayed',
        propertyId: 'Royal Palace #56789',
        statusColor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      },
      {
        id: '#1234571',
        guestName: 'David Brown',
        arrival: 'Oct 5, 2025',
        departure: 'Oct 7, 2025',
        rooms: 3,
        nights: 2,
        amount: '₦90,000',
        finalAmount: '₦90,000',
        commission: '',
        status: 'No-show',
        propertyId: 'City Center #67890',
        statusColor: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
      }
    ],
    // Page 2 data
    [
      {
        id: '#1234572',
        guestName: 'Emily Davis',
        arrival: 'Oct 6, 2025',
        departure: 'Oct 8, 2025',
        rooms: 6,
        nights: 2,
        amount: '₦180,000',
        finalAmount: '₦180,000',
        commission: '₦9,000',
        status: 'Stayed',
        propertyId: 'Ocean View #78901',
        statusColor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      },
      {
        id: '#1234573',
        guestName: 'Robert Miller',
        arrival: 'Oct 7, 2025',
        departure: 'Oct 9, 2025',
        rooms: 4,
        nights: 2,
        amount: '₦100,000',
        finalAmount: '₦100,000',
        commission: '',
        status: 'Cancelled',
        propertyId: 'Mountain Resort #89012',
        statusColor: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      },
      {
        id: '#1234574',
        guestName: 'Lisa Anderson',
        arrival: 'Oct 8, 2025',
        departure: 'Oct 10, 2025',
        rooms: 12,
        nights: 2,
        amount: '₦300,000',
        finalAmount: '₦300,000',
        commission: '₦15,000',
        status: 'Stayed',
        propertyId: 'Executive Suites #90123',
        statusColor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      },
      {
        id: '#1234575',
        guestName: 'James Taylor',
        arrival: 'Oct 9, 2025',
        departure: 'Oct 11, 2025',
        rooms: 7,
        nights: 2,
        amount: '₦140,000',
        finalAmount: '₦140,000',
        commission: '',
        status: 'No-show',
        propertyId: 'Business Hotel #01234',
        statusColor: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
      },
      {
        id: '#1234576',
        guestName: 'Maria Garcia',
        arrival: 'Oct 10, 2025',
        departure: 'Oct 12, 2025',
        rooms: 9,
        nights: 2,
        amount: '₦220,000',
        finalAmount: '₦220,000',
        commission: '₦11,000',
        status: 'Stayed',
        propertyId: 'Boutique Inn #12345',
        statusColor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      }
    ],
    // Page 3 data
    [
      {
        id: '#1234577',
        guestName: 'Christopher Lee',
        arrival: 'Oct 11, 2025',
        departure: 'Oct 13, 2025',
        rooms: 15,
        nights: 2,
        amount: '₦450,000',
        finalAmount: '₦450,000',
        commission: '₦22,500',
        status: 'Stayed',
        propertyId: 'Presidential Suite #23456',
        statusColor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      },
      {
        id: '#1234578',
        guestName: 'Amanda White',
        arrival: 'Oct 12, 2025',
        departure: 'Oct 14, 2025',
        rooms: 3,
        nights: 2,
        amount: '₦80,000',
        finalAmount: '₦80,000',
        commission: '',
        status: 'Cancelled',
        propertyId: 'Garden Hotel #34567',
        statusColor: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      },
      {
        id: '#1234579',
        guestName: 'Kevin Martinez',
        arrival: 'Oct 13, 2025',
        departure: 'Oct 15, 2025',
        rooms: 6,
        nights: 2,
        amount: '₦160,000',
        finalAmount: '₦160,000',
        commission: '₦8,000',
        status: 'Stayed',
        propertyId: 'Riverside Lodge #45678',
        statusColor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      },
      {
        id: '#1234580',
        guestName: 'Nicole Thompson',
        arrival: 'Oct 14, 2025',
        departure: 'Oct 16, 2025',
        rooms: 4,
        nights: 2,
        amount: '₦110,000',
        finalAmount: '₦110,000',
        commission: '',
        status: 'No-show',
        propertyId: 'Urban Hotel #56789',
        statusColor: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
      },
      {
        id: '#1234581',
        guestName: 'Daniel Rodriguez',
        arrival: 'Oct 15, 2025',
        departure: 'Oct 17, 2025',
        rooms: 8,
        nights: 2,
        amount: '₦240,000',
        finalAmount: '₦240,000',
        commission: '₦12,000',
        status: 'Stayed',
        propertyId: 'Skyline Tower #67890',
        statusColor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      }
    ]
  ];

  // Return data for the requested page, or empty array if page doesn't exist
  return baseData[page - 1] || [];
};

export const totalPages = 10; // Total number of pages available