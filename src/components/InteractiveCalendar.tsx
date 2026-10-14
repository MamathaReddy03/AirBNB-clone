import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface InteractiveCalendarProps {
  checkIn: Date | null;
  checkOut: Date | null;
  onSelectDates: (checkIn: Date | null, checkOut: Date | null) => void;
}

export const InteractiveCalendar: React.FC<InteractiveCalendarProps> = ({
  checkIn,
  checkOut,
  onSelectDates,
}) => {
  // Current month offset: 0 is current month (Sept 2026)
  const [currentDate, setCurrentDate] = useState<Date>(() => {
    const d = new Date(2026, 8, 1); // September 2026
    return d;
  });
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (date: Date) => {
    if (!checkIn || (checkIn && checkOut)) {
      // Starting new selection
      onSelectDates(date, null);
    } else if (checkIn && !checkOut) {
      if (date < checkIn) {
        // If clicked earlier, reset check-in to this date
        onSelectDates(date, null);
      } else if (date.getTime() === checkIn.getTime()) {
        // Same date
        onSelectDates(date, null);
      } else {
        // Completed selection
        onSelectDates(checkIn, date);
      }
    }
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();

  const formatDateLabel = (d: Date) => {
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const renderMonth = (monthDate: Date) => {
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    const monthName = monthDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });

    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(new Date(year, month, d));
    }

    return (
      <div className="w-full flex-1">
        <div className="text-center font-bold text-sm text-[#222222] mb-4">
          {monthName}
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-[#717171] mb-2">
          <span>Su</span>
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
        </div>

        <div className="grid grid-cols-7 gap-y-1">
          {days.map((date, idx) => {
            if (!date) {
              return <div key={`empty-${idx}`} className="h-10" />;
            }

            const time = date.getTime();
            const today = new Date(2026, 8, 17);
            const isPast = date < today;
            const isCheckIn = checkIn && date.toDateString() === checkIn.toDateString();
            const isCheckOut = checkOut && date.toDateString() === checkOut.toDateString();

            // Determine the effective end of the highlighted range (confirmed checkout OR hover)
            const effectiveEnd = checkOut
              ? checkOut
              : checkIn && !checkOut && hoverDate && hoverDate > checkIn
              ? hoverDate
              : null;

            const inRange =
              checkIn && effectiveEnd
                ? time > checkIn.getTime() && time < effectiveEnd.getTime()
                : false;

            // For rounded pill ends
            const isRangeStart = !!isCheckIn && !!effectiveEnd;
            const isRangeEnd = !!isCheckOut || (!checkOut && hoverDate && date.toDateString() === hoverDate?.toDateString() && !!checkIn && hoverDate > checkIn);

            return (
              <div
                key={date.toISOString()}
                className={`relative flex items-center justify-center h-10 ${
                  inRange ? 'bg-[#FFF0F2]' : ''
                } ${isRangeStart ? 'rounded-l-full' : ''} ${
                  isRangeEnd ? 'rounded-r-full' : ''
                }`}
              >
                <button
                  disabled={isPast}
                  onClick={() => handleDateClick(date)}
                  onMouseEnter={() => checkIn && !checkOut && setHoverDate(date)}
                  onMouseLeave={() => checkIn && !checkOut && setHoverDate(null)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-100 ${
                    isPast
                      ? 'text-[#cccccc] cursor-not-allowed line-through'
                      : isCheckIn || isCheckOut
                      ? 'bg-[#222222] text-white'
                      : isRangeEnd && !checkOut
                      ? 'bg-[#f0f0f0] text-[#222222]'
                      : inRange
                      ? 'text-[#222222] hover:bg-[#ffd5da]'
                      : 'text-[#222222] hover:bg-[#f7f7f7] hover:ring-1 hover:ring-[#222222] hover:ring-inset'
                  }`}
                >
                  {date.getDate()}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="pb-10 border-b border-[#ebebeb]">
      <div className="flex items-baseline justify-between mb-2">
        <div>
          <h3 className="text-[22px] font-semibold text-[#222222]">
            {nights > 0
              ? `${nights} night${nights > 1 ? 's' : ''} in Candolim`
              : 'Select check-in date'}
          </h3>
          <p className="text-sm text-[#717171] mt-1">
            {checkIn && checkOut
              ? `${formatDateLabel(checkIn)} – ${formatDateLabel(checkOut)}`
              : checkIn
              ? `Check-in: ${formatDateLabel(checkIn)} · Select checkout date`
              : 'Minimum stay: 2 nights'}
          </p>
        </div>

        {(checkIn || checkOut) && (
          <button
            onClick={() => onSelectDates(null, null)}
            className="text-sm font-semibold text-[#222222] underline hover:text-black"
          >
            Clear dates
          </button>
        )}
      </div>

      {/* Calendar Navigation & Month Views */}
      <div className="relative mt-6">
        <div className="absolute left-0 -top-3 z-10">
          <button
            onClick={handlePrevMonth}
            className="p-2 rounded-full hover:bg-[#f7f7f7] border border-[#dddddd] transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-[#222222]" />
          </button>
        </div>
        <div className="absolute right-0 -top-3 z-10">
          <button
            onClick={handleNextMonth}
            className="p-2 rounded-full hover:bg-[#f7f7f7] border border-[#dddddd] transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-[#222222]" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 pt-4">
          {renderMonth(currentDate)}
          {renderMonth(nextMonthDate)}
        </div>
      </div>
    </div>
  );
};
