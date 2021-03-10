import styled from 'styled-components';

export default styled.div`
  position: relative;

  span {
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;

    width: 160px;
    left: 50%;
    transform: translateX(-50%);

    visibility: hidden;

    opacity: 0;
    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);

    color: #312e38;

    ::before {
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      content: '';
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover {
    span {
      visibility: visible;
      opacity: 1;
    }
  }
`;
