import styled, { keyframes } from 'styled-components/macro'

import * as icon from 'ui/icons'

export type StatusIconProps = {
    status: Status
    className?: string
}

type Status = 'editing' | 'saving' | 'saved'

export function StatusIcon({ status = 'saved', className }: StatusIconProps) {
    const Comp = {
        saving: Loading,
        saved: icon.Check,
        editing: Edit,
    }[status]

    return <Comp className={className} />
}

const Edit = styled(icon.Ellipse)`
  margin-right: 2px;
`

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

const Loading = styled(icon.Loading)`
  animation: ${rotation} 1s infinite linear;
`