import {
  Handle,
  Position,
  type NodeProps,
} from '@xyflow/react';

export default function CustomProcess({
  data,
}: NodeProps) {
  const label = data.label as string;

  return (
    <div
      style={{
        width: '230px',
        boxSizing: 'border-box',
        background: '#ffffff',
        border: '1px solid #c4b5fd',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        position: 'relative',
      }}
    >
      {/* Left Input Handle */}
      <Handle
        type="target"
        position={Position.Left}
        style={{
          width: '10px',
          height: '10px',
          background: '#7c3aed',
          border: '2px solid #ffffff',
        }}
      />

      {/* Header */}
      <div
        style={{
          padding: '10px 14px',
          background: '#f5f3ff',
          borderBottom: '1px solid #ddd6fe',
          borderRadius: '10px 10px 0 0',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            background: '#7c3aed',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: '13px',
          }}
        >
          P
        </div>

        <div>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#5b21b6',
            }}
          >
            {label}
          </div>

          <div
            style={{
              fontSize: '10px',
              color: '#64748b',
            }}
          >
            Process
          </div>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          padding: '12px 14px',
        }}
      >
        {/* Input 1 */}
        <div style={{ marginBottom: '10px' }}>
          <div
            style={{
              fontSize: '11px',
              color: '#6b7280',
              marginBottom: '5px',
            }}
          >
            Input 1
          </div>

          <input
            type="text"
            placeholder="Enter value..."
            onMouseDown={(event) => event.stopPropagation()}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '8px 10px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              outline: 'none',
              fontSize: '12px',
            }}
          />
        </div>

        {/* Input 2 */}
        <div>
          <div
            style={{
              fontSize: '11px',
              color: '#6b7280',
              marginBottom: '5px',
            }}
          >
            Input 2
          </div>

          <input
            type="text"
            placeholder="Enter value..."
            onMouseDown={(event) => event.stopPropagation()}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '8px 10px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              outline: 'none',
              fontSize: '12px',
            }}
          />
        </div>
      </div>

      {/* Right Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        style={{
          width: '10px',
          height: '10px',
          background: '#7c3aed',
          border: '2px solid #ffffff',
        }}
      />
    </div>
  );
}