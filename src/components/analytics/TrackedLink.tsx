'use client';

import Link from 'next/link';
import { ComponentProps, MouseEvent, useCallback } from 'react';

import { track, EventName } from '@/lib/analytics';

type LinkProps = ComponentProps<typeof Link>;

interface TrackedLinkProps extends LinkProps {
  trackEvent: EventName;
  trackProps?: Record<string, string | number>;
}

/**
 * Link component that fires an analytics event on click
 */
export function TrackedLink({
  trackEvent,
  trackProps,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      track(trackEvent, trackProps);
      if (onClick) {
        onClick(e);
      }
    },
    [trackEvent, trackProps, onClick],
  );

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
